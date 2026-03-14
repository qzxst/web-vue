<template>
  <div class="room-selector">
    <h2>选择游戏房间</h2>

    <div class="rooms-grid">
      <div
        v-for="room in availableRooms"
        :key="room.roomId"
        class="room-card"
        :class="{ full: room.currentPlayers >= room.maxPlayers }"
        @click="joinRoom(room)"
      >
        <div class="room-name">{{ room.roomName }}</div>
        <div class="room-info">
          <div>玩家: {{ room.currentPlayers }}/{{ room.maxPlayers }}</div>
          <div>下注: {{ room.minBet }} - {{ room.maxBet }}</div>
        </div>
        <div class="room-status">{{ room.status }}</div>
      </div>
    </div>

    <div v-if="availableRooms.length === 0" class="no-rooms">暂无可用房间</div>
  </div>
</template>

<script setup lang="ts">
import { useGameStore } from "@/stores/slotgame";
import type { Room } from "@/type/slotgame";
import { computed } from "vue";

const gameStore = useGameStore();
const availableRooms = computed(() => gameStore.availableRooms);
function joinRoom(room: Room): void {
  if (room.currentPlayers >= room.maxPlayers) {
    alert("房间已满");
    return;
  }

  gameStore.joinRoom(room.roomId);
}
</script>

<style scoped>
.room-selector {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.rooms-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.room-card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 15px;
  padding: 20px;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.room-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  transition: background 0.3s ease;
}

.room-card:hover::before {
  background: rgba(0, 0, 0, 0.1);
}

.room-card.full {
  background: linear-gradient(135deg, #999 0%, #666 100%);
  cursor: not-allowed;
}

.room-card.full::before {
  background: rgba(0, 0, 0, 0.5);
}

.room-name {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 10px;
  position: relative;
  z-index: 1;
}

.room-info {
  position: relative;
  z-index: 1;
  font-size: 0.9rem;
  opacity: 0.8;
}

.room-status {
  position: absolute;
  top: 10px;
  right: 10px;
  background: rgba(255, 255, 255, 0.2);
  padding: 5px 10px;
  border-radius: 15px;
  font-size: 0.8rem;
  z-index: 1;
}

.no-rooms {
  text-align: center;
  padding: 40px;
  color: #666;
  font-size: 1.1rem;
}
</style>
