import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { websocketService } from "@/services/websocket";
import type {
  GameState,
  Player,
  Room,
  SpinResult,
  ServerMessage,
} from "@/type/slotgame";

export const useGameStore = defineStore("slotgame", () => {
  // 状态
  const player = ref<Player | null>(null);
  const currentRoom = ref<Room | null>(null);
  const balance = ref(0);
  const isSpinning = ref(false);
  const lastSpinResult = ref<SpinResult | null>(null);
  const availableRooms = ref<Room[]>([]);
  const connectionStatus = ref<GameState["connectionStatus"]>("disconnected");

  // 计算属性
  const isConnected = computed(() => connectionStatus.value === "connected");
  const canSpin = computed(
    () => isConnected.value && !isSpinning.value && currentRoom.value !== null
  );

  // 监听 WebSocket 状态
  websocketService.connectionStatus = connectionStatus;

  // 初始化消息监听
  websocketService.onMessage(handleServerMessage);

  // 动作
  function connect() {
    return websocketService.connect();
  }

  function disconnect() {
    websocketService.disconnect();
  }

  function joinRoom(roomId: string) {
    if (!player.value) return;

    websocketService.send({
      type: "JOIN_ROOM",
      playerId: player.value.playerId,
      roomId,
    });
  }

  function leaveRoom() {
    if (!player.value || !currentRoom.value) return;

    websocketService.send({
      type: "LEAVE_ROOM",
      playerId: player.value.playerId,
      roomId: currentRoom.value.roomId,
    });
  }

  function spin(betAmount: number) {
    if (!player.value) return;

    isSpinning.value = true;
    websocketService.send({
      type: "SPIN",
      playerId: player.value.playerId,
      betAmount,
    });
  }

  function buyBonus(bonusType: string) {
    if (!player.value) return;

    websocketService.send({
      type: "BUY_BONUS",
      playerId: player.value.playerId,
      bonusType,
    });
  }

  // 消息处理
  function handleServerMessage(message: ServerMessage) {
    switch (message.type) {
      case "PLAYER_UPDATE":
        console.log("Player updated:", message.player);
        player.value = message.player!;
        balance.value = message.player!.balance;
        break;

      case "ROOM_UPDATE":
        console.log("Room updated:", message.room);
        currentRoom.value = message.room!;
        break;

      case "ROOM_JOINED":
        console.log("Joined room:", message.room);
        currentRoom.value = message.room!;
        player.value = message.player!;
        balance.value = message.player!.balance;
        break;

      case "ROOM_LIST":
        console.log("Updating available rooms:", message.availableRooms);
        availableRooms.value = message.availableRooms || [];
        break;

      case "SPIN_RESULT":
        console.log("Spin result:", message.spinResult);
        lastSpinResult.value = message.spinResult!;
        balance.value = message.spinResult!.newBalance;
        isSpinning.value = false;
        break;

      case "ERROR":
        console.error("Server error:", message.errorMessage);
        isSpinning.value = false;
        break;

      case "SUCCESS":
        console.log("Success:", message.errorMessage);
        break;
    }
  }

  return {
    // 状态
    player,
    currentRoom,
    balance,
    isSpinning,
    lastSpinResult,
    availableRooms,
    connectionStatus,

    // 计算属性
    isConnected,
    canSpin,

    // 动作
    connect,
    disconnect,
    joinRoom,
    leaveRoom,
    spin,
    buyBonus,
  };
});
