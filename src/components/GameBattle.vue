<template>
  <div class="battle-container">
    <h2>多玩家回合制对战</h2>

    <!-- 连接状态 -->
    <div class="connection-status" :class="connectionStatus">
      状态: {{ connectionStatusText }}
    </div>

    <!-- 连接控制按钮 - 确保这个部分存在 -->
    <div class="connection-controls" v-if="!isConnected">
      <button
        @click="connect"
        :disabled="connectionStatus === 'connecting'"
        class="connect-btn"
      >
        {{ connectionStatus === "connecting" ? "连接中..." : "连接游戏" }}
      </button>
    </div>

    <!-- 房间信息 -->
    <div class="room-info" v-if="isConnected && roomInfo">
      <h3>{{ roomInfo }}</h3>
    </div>

    <!-- 玩家状态显示 -->
    <div class="players" v-if="isConnected && players.length > 0">
      <div
        v-for="player in players"
        :key="player.id"
        class="player"
        :class="{
          'current-player': player.id === myPlayerId,
          opponent: player.id !== myPlayerId,
        }"
      >
        <h3>{{ player.name }}</h3>
        <div class="hp-bar">
          <div
            class="hp-fill"
            :style="{ width: getHpPercentage(player) + '%' }"
          ></div>
        </div>
        <p>HP: {{ player.hp }} / {{ player.maxHp }}</p>
        <div v-if="player.id === currentTurn" class="turn-indicator">
          🎯 当前回合
        </div>
        <div v-if="player.id === myPlayerId" class="you-indicator">(你)</div>
      </div>
    </div>

    <!-- 等待其他玩家 -->
    <div class="waiting-section" v-if="isConnected && players.length < 2">
      <div class="waiting-message">
        ⏳ 等待其他玩家加入... ({{ players.length }}/2)
      </div>
      <div class="room-tips">
        <p>提示：打开另一个浏览器标签页并连接，即可开始游戏</p>
      </div>
    </div>

    <!-- 行动按钮 -->
    <div class="actions" v-if="isMyTurn && isConnected && players.length >= 2">
      <h4>选择行动:</h4>
      <div class="action-buttons">
        <button
          v-for="target in opponents"
          :key="target.id"
          @click="performAction('ATTACK', target.id)"
          class="action-btn attack"
        >
          攻击 {{ target.name }}
        </button>
        <button @click="performAction('DEFEND')" class="action-btn defend">
          防御
        </button>
        <button @click="performAction('SKILL')" class="action-btn skill">
          技能
        </button>
      </div>
    </div>

    <!-- 等待对手行动 -->
    <div class="waiting-turn" v-else-if="isConnected && players.length >= 2">
      <div class="waiting-message">⏳ 等待对手行动...</div>
    </div>

    <!-- 战斗日志 -->
    <div class="battle-log" v-if="isConnected">
      <h3>战斗日志</h3>
      <div class="log-entries">
        <div v-for="(log, index) in battleLogs" :key="index" class="log-entry">
          {{ log }}
        </div>
      </div>
    </div>

    <!-- 断开连接按钮 -->
    <div class="disconnect-controls" v-if="isConnected">
      <button @click="disconnect" class="disconnect-btn">断开连接</button>
    </div>

    <!-- 调试信息 -->
    <div class="debug-info" v-if="showDebug">
      <h4>调试信息</h4>
      <p>isMyTurn: {{ isMyTurn }}</p>
      <p>myPlayerId: {{ myPlayerId }}</p>
      <p>currentTurn: {{ currentTurn }}</p>
      <p>玩家数量: {{ players.length }}</p>
      <p>连接状态: {{ connectionStatus }}</p>
      <button @click="forceMyTurn">强制设置我的回合</button>
      <button @click="sendTestMessage">发送测试消息</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import ProtobufHelper from "@/utils/protobuf";

// 响应式数据
const players = ref([]);
const battleLogs = ref([]);
const isMyTurn = ref(false);
const currentTurn = ref(null);
const myPlayerId = ref(null);
const roomInfo = ref("");
const ws = ref(null);
const connectionStatus = ref("disconnected");
const showDebug = ref(false);

// 计算属性
const connectionStatusText = computed(() => {
  const statusMap = {
    disconnected: "未连接",
    connecting: "连接中...",
    connected: "已连接",
    error: "连接错误",
  };
  return statusMap[connectionStatus.value];
});

const isConnected = computed(() => connectionStatus.value === "connected");

const opponents = computed(() => {
  return players.value.filter((player) => player.id !== myPlayerId.value);
});

// 方法
const getHpPercentage = (player) => {
  if (!player.maxHp || player.maxHp === 0) return 0;
  return (player.hp / player.maxHp) * 100;
};

const addBattleLog = (message) => {
  battleLogs.value.push(`[${new Date().toLocaleTimeString()}] ${message}`);
  if (battleLogs.value.length > 50) {
    battleLogs.value.shift();
  }
};

const connect = async () => {
  if (isConnected.value || connectionStatus.value === "connecting") {
    return;
  }

  try {
    connectionStatus.value = "connecting";
    addBattleLog("正在连接到游戏服务器...");

    // 确保 Protobuf 文件已加载
    await ProtobufHelper.loadProtos();

    // 创建 WebSocket 连接
    ws.value = new WebSocket("ws://localhost:9502/game");
    ws.value.binaryType = "arraybuffer";

    // 设置事件处理器
    ws.value.onopen = handleWebSocketOpen;
    ws.value.onmessage = handleWebSocketMessage;
    ws.value.onclose = handleWebSocketClose;
    ws.value.onerror = handleWebSocketError;
  } catch (error) {
    connectionStatus.value = "error";
    addBattleLog(`连接失败: ${error.message}`);
    console.error("Failed to connect:", error);
  }
};

const disconnect = () => {
  if (ws.value) {
    ws.value.close();
  }
  resetGameState();
};

const resetGameState = () => {
  players.value = [];
  isMyTurn.value = false;
  currentTurn.value = null;
  myPlayerId.value = null;
  roomInfo.value = "";
  connectionStatus.value = "disconnected";
  addBattleLog("已断开连接");
};

const handleWebSocketOpen = () => {
  connectionStatus.value = "connected";
  addBattleLog("✅ 已成功连接到游戏服务器");
  addBattleLog("正在等待其他玩家加入...");
};

const handleWebSocketMessage = async (event) => {
  try {
    const serverMsg = ProtobufHelper.decodeMessage(
      "game.ServerMessage",
      event.data
    );

    console.log("🔍 收到服务器消息:", {
      type: serverMsg.type,
      is_my_turn: serverMsg.is_my_turn,
      result: serverMsg.result,
      players: serverMsg.players,
    });

    // 更新回合状态
    if (serverMsg.is_my_turn !== undefined) {
      isMyTurn.value = serverMsg.is_my_turn;
      console.log(
        "🔄 回合状态更新:",
        serverMsg.is_my_turn ? "我的回合" : "对手回合"
      );
    }

    // 更新玩家列表
    if (serverMsg.players && serverMsg.players.length > 0) {
      players.value = serverMsg.players;

      // 确定当前玩家ID
      if (!myPlayerId.value && players.value.length > 0) {
        // 简单策略：假设第一个连接的玩家是自己
        myPlayerId.value = players.value[0].id;
        console.log("🎯 我的玩家ID:", myPlayerId.value);
        addBattleLog(`你的玩家ID: ${myPlayerId.value}`);
      }

      // 确定当前回合玩家
      if (serverMsg.is_my_turn !== undefined) {
        currentTurn.value = serverMsg.is_my_turn
          ? myPlayerId.value
          : opponents.value[0]?.id || null;
      }
    }

    switch (serverMsg.type) {
      case "ROOM_INFO":
        roomInfo.value = serverMsg.result;
        addBattleLog(serverMsg.result);
        break;

      case "GAME_START":
        addBattleLog("🎮 游戏开始！");
        roomInfo.value = "游戏进行中";
        break;

      case "BATTLE_UPDATE":
        addBattleLog("游戏状态已更新");
        break;

      case "ACTION_RESULT":
        addBattleLog(serverMsg.result);
        break;

      case "TURN_CHANGE":
        addBattleLog(serverMsg.result);
        break;

      case "GAME_OVER":
        addBattleLog(`🎉 ${serverMsg.result}`);
        isMyTurn.value = false;
        break;

      case "PLAYER_JOINED":
        addBattleLog(`👤 ${serverMsg.result}`);
        break;

      case "PLAYER_LEFT":
        addBattleLog(`🚪 ${serverMsg.result}`);
        break;

      default:
        addBattleLog(`收到消息: ${serverMsg.type}`);
    }
  } catch (error) {
    console.error("❌ 处理服务器消息时出错:", error);
    addBattleLog("处理服务器消息时出错");
  }
};

const handleWebSocketClose = () => {
  addBattleLog("与服务器断开连接");
  resetGameState();
};

const handleWebSocketError = (error) => {
  connectionStatus.value = "error";
  addBattleLog("WebSocket 连接发生错误");
  console.error("WebSocket error:", error);
};

const performAction = (actionType, targetId = null) => {
  if (!ws.value || ws.value.readyState !== WebSocket.OPEN) {
    addBattleLog("未连接到服务器，无法执行动作");
    return;
  }

  if (!isMyTurn.value) {
    addBattleLog("现在不是你的回合，无法行动");
    return;
  }

  // 如果没有指定目标，选择第一个对手
  if (!targetId && opponents.value.length > 0) {
    targetId = opponents.value[0].id;
  }

  if (!targetId) {
    addBattleLog("没有可攻击的目标");
    return;
  }

  try {
    const actionData = {
      type: "BATTLE_ACTION",
      action: {
        playerId: myPlayerId.value,
        action: actionType,
        targetId: targetId,
        value: 0, // 服务端会计算伤害
      },
    };

    const messageBuffer = ProtobufHelper.encodeMessage(
      "game.ClientMessage",
      actionData
    );
    ws.value.send(messageBuffer);

    addBattleLog(`执行了 ${getActionName(actionType)}`);
  } catch (error) {
    console.error("执行动作时出错:", error);
    addBattleLog("执行动作时出错");
  }
};

const getActionName = (actionType) => {
  const names = {
    ATTACK: "攻击",
    DEFEND: "防御",
    SKILL: "技能",
  };
  return names[actionType] || "未知动作";
};

// 调试方法
const forceMyTurn = () => {
  isMyTurn.value = true;
  addBattleLog("调试: 强制设置为我的回合");
};

const sendTestMessage = () => {
  if (!ws.value || ws.value.readyState !== WebSocket.OPEN) {
    addBattleLog("未连接到服务器");
    return;
  }

  const testData = {
    type: "BATTLE_ACTION",
    action: {
      playerId: "test",
      action: "ATTACK",
      targetId: "opponent",
      value: 10,
    },
  };

  try {
    const messageBuffer = ProtobufHelper.encodeMessage(
      "game.ClientMessage",
      testData
    );
    ws.value.send(messageBuffer);
    addBattleLog("调试: 发送测试消息");
  } catch (error) {
    console.error("发送测试消息失败:", error);
  }
};

// 生命周期
onMounted(() => {
  addBattleLog('多玩家游戏已加载，点击"连接游戏"开始');
  // 开发环境下自动显示调试信息
  if (process.env.NODE_ENV === "development") {
    showDebug.value = true;
  }
});

onUnmounted(() => {
  if (ws.value) {
    ws.value.close();
  }
});
</script>

<style scoped>
.battle-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
  font-family: "Arial", sans-serif;
}

.connection-status {
  padding: 10px 15px;
  border-radius: 6px;
  margin-bottom: 20px;
  font-weight: bold;
  text-align: center;
}

.connection-status.connected {
  background-color: #e8f5e8;
  color: #2e7d32;
  border: 1px solid #c8e6c9;
}

.connection-status.connecting {
  background-color: #fff3e0;
  color: #ef6c00;
  border: 1px solid #ffcc80;
}

.connection-status.disconnected {
  background-color: #ffebee;
  color: #c62828;
  border: 1px solid #ffcdd2;
}

.connection-status.error {
  background-color: #fbe9e7;
  color: #d84315;
  border: 1px solid #ffab91;
}

.connection-controls,
.disconnect-controls {
  text-align: center;
  margin: 20px 0;
}

.connect-btn,
.disconnect-btn {
  padding: 12px 24px;
  font-size: 16px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s;
}

.connect-btn {
  background-color: #4caf50;
  color: white;
}

.connect-btn:hover:not(:disabled) {
  background-color: #45a049;
}

.connect-btn:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}

.disconnect-btn {
  background-color: #f44336;
  color: white;
}

.disconnect-btn:hover {
  background-color: #da190b;
}

.room-info {
  background-color: #479fde;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 20px;
  text-align: center;
  border: 1px solid #bbdefb;
  font-size: 18px;
}

.players {
  display: flex;
  justify-content: space-around;
  margin-bottom: 30px;
  flex-wrap: wrap;
  gap: 20px;
}

.player {
  text-align: center;
  padding: 20px;
  border: 2px solid #ddd;
  border-radius: 8px;
  min-width: 250px;
  background-color: #9c4949;
  transition: all 0.3s ease;
}

.player.current-player {
  border: 3px solid #4caf50;
  background-color: #66893d;
  transform: scale(1.05);
}

.player.opponent {
  border: 3px solid #f44336;
  background-color: #ffebee;
}

.player h3 {
  margin: 0 0 10px 0;
  color: #333;
  font-size: 20px;
}

.hp-bar {
  width: 100%;
  height: 25px;
  border: 1px solid #333;
  margin: 10px 0;
  border-radius: 12px;
  overflow: hidden;
  background-color: #cb4949;
}

.hp-fill {
  height: 100%;
  background: linear-gradient(to right, #4caf50, #8bc34a);
  transition: width 0.5s ease;
}

.turn-indicator {
  color: #ff9800;
  font-weight: bold;
  margin-top: 8px;
  font-size: 14px;
}

.you-indicator {
  color: #2196f3;
  font-weight: bold;
  margin-top: 5px;
}

.waiting-section,
.waiting-turn {
  text-align: center;
  padding: 30px;
  background-color: #d3942f;
  border-radius: 8px;
  margin: 20px 0;
  border: 1px solid #ffcc80;
}

.waiting-message {
  font-size: 18px;
  color: #ef6c00;
  margin-bottom: 15px;
}

.room-tips {
  font-size: 14px;
  color: #666;
}

.actions {
  margin: 30px 0;
  text-align: center;
  padding: 20px;
  background-color: #a66c6c;
  border-radius: 8px;
}

.actions h4 {
  margin: 0 0 20px 0;
  color: #333;
  font-size: 20px;
}

.action-buttons {
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
}

.action-btn {
  padding: 15px 25px;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: bold;
  min-width: 200px;
}

.action-btn.attack {
  background-color: #ff5722;
  color: white;
}

.action-btn.attack:hover {
  background-color: #e64a19;
  transform: translateY(-2px);
}

.action-btn.defend {
  background-color: #2196f3;
  color: white;
}

.action-btn.defend:hover {
  background-color: #1976d2;
  transform: translateY(-2px);
}

.action-btn.skill {
  background-color: #9c27b0;
  color: white;
}

.action-btn.skill:hover {
  background-color: #7b1fa2;
  transform: translateY(-2px);
}

.battle-log {
  border: 1px solid #ddd;
  padding: 20px;
  max-height: 300px;
  overflow-y: auto;
  border-radius: 8px;
  background-color: darkblue;
  margin-top: 20px;
}

.battle-log h3 {
  margin-top: 0;
  color: #333;
  border-bottom: 1px solid #eee;
  padding-bottom: 10px;
}

.log-entries {
  max-height: 200px;
  overflow-y: auto;
}

.log-entry {
  padding: 8px 0;
  border-bottom: 1px solid #eee;
  font-size: 14px;
  line-height: 1.4;
}

.log-entry:last-child {
  border-bottom: none;
}

.debug-info {
  margin-top: 20px;
  padding: 15px;
  background-color: darkgoldenrod;
  border-radius: 6px;
  border: 1px solid #ddd;
}

.debug-info h4 {
  margin-top: 0;
  color: #666;
}

.debug-info button {
  margin: 5px;
  padding: 8px 12px;
  background-color: #b13a3a;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .players {
    flex-direction: column;
    align-items: center;
  }

  .player {
    width: 100%;
    max-width: 300px;
  }

  .action-buttons {
    width: 100%;
  }

  .action-btn {
    width: 100%;
  }
}
</style>
