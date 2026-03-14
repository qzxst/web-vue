<template>
  <div class="slot-machine">
    <!-- 玩家信息 -->
    <div class="player-info">
      <div class="player-name">{{ player?.playerName }}</div>
      <div class="balance">余额: {{ balance }}</div>
      <div class="level">等级: {{ player?.level }}</div>
    </div>

    <!-- 老虎机主体 -->
    <div class="slot-main">
      <!-- 转轴网格 -->
      <div class="reels-grid">
        <div
          v-for="(reel, reelIndex) in reels"
          :key="reelIndex"
          class="reel-column"
        >
          <div
            v-for="(symbol, symbolIndex) in reel"
            :key="symbolIndex"
            class="symbol-cell"
            :class="{
              winning: isWinningSymbol(reelIndex, symbolIndex),
              spinning: isSpinning,
            }"
          >
            <div class="symbol" :class="getSymbolClass(symbol)">
              {{ getSymbolDisplay(symbol) }}
            </div>
          </div>
        </div>
      </div>

      <!-- 赢钱线路高亮 -->
      <div class="win-lines">
        <svg class="lines-svg" viewBox="0 0 500 300">
          <path
            v-for="line in paylines"
            :key="line.index"
            :d="generateLinePath(line.positions)"
            class="win-line"
            :class="{ active: isWinningLine(line.index) }"
          />
        </svg>
      </div>
    </div>

    <!-- 控制面板 -->
    <div class="control-panel">
      <div class="bet-controls">
        <button
          v-for="bet in availableBets"
          :key="bet"
          class="bet-button"
          :class="{ active: currentBet === bet }"
          @click="currentBet = bet"
          :disabled="!canSpin"
        >
          {{ bet }}
        </button>
      </div>

      <button
        class="spin-button"
        :class="{ spinning: isSpinning }"
        @click="handleSpin"
        :disabled="!canSpin"
      >
        {{ isSpinning ? "旋转中..." : "旋转" }}
      </button>

      <div class="auto-play-controls">
        <button
          class="auto-play-button"
          @click="toggleAutoPlay"
          :class="{ active: autoPlay }"
        >
          自动 {{ autoPlay ? `(${autoPlayCount})` : "" }}
        </button>
      </div>
    </div>

    <!-- 结果显示 -->
    <div v-if="lastSpinResult" class="result-display">
      <div v-if="lastSpinResult.winAmount > 0" class="win-message">
        恭喜赢得 {{ lastSpinResult.winAmount }}!
      </div>
      <div v-if="lastSpinResult.isBonus" class="bonus-message">
        触发奖励游戏!
      </div>
    </div>

    <!-- 动画容器 -->
    <div class="animation-container">
      <div
        v-for="(particle, index) in particles"
        :key="index"
        class="particle"
        :style="particle.style"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from "vue";
import { useGameStore } from "@/stores/slotgame";
import { gsap } from "gsap";
import type { SymbolConfig } from "@/type/slotgame";

const gameStore = useGameStore();

// 响应式数据
const currentBet = ref(10);
const autoPlay = ref(false);
const autoPlayCount = ref(0);
const particles = ref<Array<{ style: any }>>([]);

// 符号配置
const symbols: Record<string, SymbolConfig> = {
  cherry: {
    id: "cherry",
    name: "樱桃",
    weight: 20,
    multiplier: 2,
    isWild: false,
    isScatter: false,
    color: "#ff0000",
    icon: "🍒",
  },
  lemon: {
    id: "lemon",
    name: "柠檬",
    weight: 18,
    multiplier: 3,
    isWild: false,
    isScatter: false,
    color: "#ffff00",
    icon: "🍋",
  },
  orange: {
    id: "orange",
    name: "橙子",
    weight: 16,
    multiplier: 4,
    isWild: false,
    isScatter: false,
    color: "#ffa500",
    icon: "🍊",
  },
  plum: {
    id: "plum",
    name: "李子",
    weight: 14,
    multiplier: 5,
    isWild: false,
    isScatter: false,
    color: "#800080",
    icon: "🍑",
  },
  grapes: {
    id: "grapes",
    name: "葡萄",
    weight: 12,
    multiplier: 8,
    isWild: false,
    isScatter: false,
    color: "#6a0dad",
    icon: "🍇",
  },
  watermelon: {
    id: "watermelon",
    name: "西瓜",
    weight: 10,
    multiplier: 10,
    isWild: false,
    isScatter: false,
    color: "#00ff00",
    icon: "🍉",
  },
  seven: {
    id: "seven",
    name: "七",
    weight: 5,
    multiplier: 20,
    isWild: false,
    isScatter: false,
    color: "#ffffff",
    icon: "7️⃣",
  },
  wild: {
    id: "wild",
    name: "万能",
    weight: 3,
    multiplier: 0,
    isWild: true,
    isScatter: false,
    color: "#ffd700",
    icon: "🌟",
  },
  scatter: {
    id: "scatter",
    name: "散射",
    weight: 2,
    multiplier: 0,
    isWild: false,
    isScatter: true,
    color: "#00ffff",
    icon: "💎",
  },
};

// 赢钱线路定义
const paylines = [
  {
    index: 0,
    positions: [
      [0, 0],
      [1, 0],
      [2, 0],
      [3, 0],
      [4, 0],
    ],
  }, // 中间行
  {
    index: 1,
    positions: [
      [0, 1],
      [1, 1],
      [2, 1],
      [3, 1],
      [4, 1],
    ],
  }, // 上行
  {
    index: 2,
    positions: [
      [0, 2],
      [1, 2],
      [2, 2],
      [3, 2],
      [4, 2],
    ],
  }, // 下行
  {
    index: 3,
    positions: [
      [0, 0],
      [1, 1],
      [2, 2],
      [3, 1],
      [4, 0],
    ],
  }, // V型1
  {
    index: 4,
    positions: [
      [0, 2],
      [1, 1],
      [2, 0],
      [3, 1],
      [4, 2],
    ],
  }, // V型2
];

// 计算属性
const player = computed(() => gameStore.player);
const balance = computed(() => gameStore.balance);
const isSpinning = computed(() => gameStore.isSpinning);
const lastSpinResult = computed(() => gameStore.lastSpinResult);
const canSpin = computed(
  () => gameStore.canSpin && balance.value >= currentBet.value
);

const availableBets = computed(() => {
  if (!gameStore.currentRoom) return [10, 20, 50];
  const min = gameStore.currentRoom.minBet;
  const max = gameStore.currentRoom.maxBet;
  return [min, min * 2, min * 5].filter((bet) => bet <= max);
});

// 转轴数据
const reels = computed(() => {
  if (!lastSpinResult.value) {
    // 默认转轴
    return Array(5)
      .fill(null)
      .map(() => Array(3).fill("cherry"));
  }

  // 从扁平数组转换为 5x3 网格
  const result: string[][] = [];
  const flatReels = lastSpinResult.value.reels;

  for (let i = 0; i < 5; i++) {
    result.push(flatReels.slice(i * 3, (i + 1) * 3));
  }

  return result;
});

// 方法
function getSymbolClass(symbol: string): string {
  return `symbol-${symbol}`;
}

function getSymbolDisplay(symbol: string): string {
  return symbols[symbol]?.icon || symbol;
}

function isWinningSymbol(reelIndex: number, symbolIndex: number): boolean {
  if (!lastSpinResult.value?.winLines) return false;

  return lastSpinResult.value.winLines.some((line: any) => {
    const positions = paylines[line.lineIndex]?.positions || [];
    return positions.some(([r, s]) => r === reelIndex && s === symbolIndex);
  });
}

function isWinningLine(lineIndex: number): boolean {
  return (
    lastSpinResult.value?.winLines?.some(
      (line: any) => line.lineIndex === lineIndex
    ) || false
  );
}

function generateLinePath(positions: number[][]): string {
  const cellWidth = 100;
  const cellHeight = 100;

  const points = positions.map(([x, y]) => {
    const centerX = x * cellWidth + cellWidth / 2;
    const centerY = y * cellHeight + cellHeight / 2;
    return `${centerX},${centerY}`;
  });

  return `M ${points.join(" L ")}`;
}

function handleSpin(): void {
  if (!canSpin.value) return;

  gameStore.spin(currentBet.value);
  playSpinAnimation();
}

function playSpinAnimation(): void {
  // 转轴旋转动画
  const reelColumns = document.querySelectorAll(".reel-column");

  reelColumns.forEach((reel, index) => {
    gsap.fromTo(
      reel,
      { rotationX: -360 },
      {
        rotationX: 0,
        duration: 1 + index * 0.1,
        ease: "back.out(1.7)",
        onComplete:
          index === reelColumns.length - 1 ? showWinEffects : undefined,
      }
    );
  });
}

function showWinEffects(): void {
  if (lastSpinResult.value?.winAmount && lastSpinResult.value.winAmount > 0) {
    createParticles();
    playWinSound();
  }
}

function createParticles(): void {
  particles.value = [];

  for (let i = 0; i < 50; i++) {
    particles.value.push({
      style: {
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        backgroundColor: `hsl(${Math.random() * 360}, 100%, 50%)`,
        animationDelay: `${Math.random() * 1}s`,
      },
    });
  }

  // 3秒后清除粒子
  setTimeout(() => {
    particles.value = [];
  }, 3000);
}

function playWinSound(): void {
  // 播放赢钱音效
  const audio = new Audio("/sounds/sound.mp3");
  audio.play().catch(() => {
    // 忽略自动播放限制错误
  });
}

function toggleAutoPlay(): void {
  autoPlay.value = !autoPlay.value;
  if (autoPlay.value) {
    startAutoPlay();
  }
}

function startAutoPlay(): void {
  if (!autoPlay.value || !canSpin.value) {
    autoPlay.value = false;
    return;
  }

  autoPlayCount.value++;
  handleSpin();

  // 1.5秒后继续自动旋转
  setTimeout(() => {
    if (autoPlay.value) {
      startAutoPlay();
    }
  }, 1500);
}

// 生命周期
onMounted(() => {
  // 初始化游戏
  if (!gameStore.isConnected) {
    gameStore.connect();
  }
});

onUnmounted(() => {
  autoPlay.value = false;
});
</script>

<style scoped>
.slot-machine {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background: linear-gradient(135deg, #1a2a6c, #b21f1f, #fdbb2d);
  border-radius: 20px;
  color: white;
  position: relative;
  overflow: hidden;
}

.player-info {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  background: rgba(0, 0, 0, 0.3);
  padding: 15px;
  border-radius: 10px;
}

.slot-main {
  position: relative;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 15px;
  padding: 20px;
  margin-bottom: 20px;
}

.reels-grid {
  display: flex;
  gap: 10px;
  justify-content: center;
  perspective: 1000px;
}

.reel-column {
  display: flex;
  flex-direction: column;
  gap: 5px;
  transform-style: preserve-3d;
}

.symbol-cell {
  width: 80px;
  height: 80px;
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.symbol-cell.winning {
  background: rgba(255, 215, 0, 0.3);
  border-color: gold;
  animation: pulse 1s infinite;
}

.symbol-cell.spinning {
  animation: spin 0.5s linear infinite;
}

.symbol {
  font-size: 2rem;
  transition: transform 0.3s ease;
}

.win-lines {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.lines-svg {
  width: 100%;
  height: 100%;
}

.win-line {
  fill: none;
  stroke: transparent;
  stroke-width: 3;
  stroke-dasharray: 10;
  animation: dash 2s linear infinite;
  transition: stroke 0.3s ease;
}

.win-line.active {
  stroke: gold;
  stroke-width: 4;
}

.control-panel {
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.3);
  padding: 20px;
  border-radius: 15px;
}

.bet-controls {
  display: flex;
  gap: 10px;
}

.bet-button,
.spin-button,
.auto-play-button {
  padding: 12px 24px;
  border: none;
  border-radius: 25px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
}

.bet-button {
  background: rgba(255, 255, 255, 0.2);
  color: white;
}

.bet-button.active {
  background: #4caf50;
  transform: scale(1.1);
}

.spin-button {
  background: linear-gradient(45deg, #ff6b6b, #ffa726);
  color: white;
  min-width: 120px;
}

.spin-button:disabled {
  background: rgba(255, 255, 255, 0.2);
  cursor: not-allowed;
}

.spin-button.spinning {
  animation: pulse 1s infinite;
}

.auto-play-button {
  background: rgba(255, 255, 255, 0.2);
  color: white;
}

.auto-play-button.active {
  background: #2196f3;
}

.result-display {
  text-align: center;
  margin-top: 20px;
}

.win-message {
  font-size: 1.5rem;
  color: gold;
  font-weight: bold;
  animation: bounce 0.5s ease infinite alternate;
}

.bonus-message {
  font-size: 1.2rem;
  color: #00ffff;
  font-weight: bold;
  animation: glow 1s ease-in-out infinite alternate;
}

.animation-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.particle {
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  animation: float 2s ease-in-out forwards;
}

@keyframes spin {
  from {
    transform: rotateX(0deg);
  }
  to {
    transform: rotateX(360deg);
  }
}

@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}

@keyframes bounce {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-10px);
  }
}

@keyframes glow {
  from {
    text-shadow: 0 0 5px #00ffff;
  }
  to {
    text-shadow: 0 0 20px #00ffff, 0 0 30px #00ffff;
  }
}

@keyframes dash {
  to {
    stroke-dashoffset: -20;
  }
}

@keyframes float {
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 1;
  }
  100% {
    transform: translateY(-100px) rotate(360deg);
    opacity: 0;
  }
}

/* 响应式设计 */
@media (max-width: 768px) {
  .slot-machine {
    padding: 10px;
  }

  .reels-grid {
    gap: 5px;
  }

  .symbol-cell {
    width: 60px;
    height: 60px;
  }

  .symbol {
    font-size: 1.5rem;
  }

  .control-panel {
    flex-direction: column;
    gap: 10px;
  }
}
</style>
