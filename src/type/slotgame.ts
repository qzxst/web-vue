// Protobuf 生成类型
export interface Player {
  playerId: string;
  playerName: string;
  balance: number;
  level: number;
  experience: number;
  lastLoginTime: number;
  createdTime: number;
}

export interface Room {
  roomId: string;
  roomName: string;
  maxPlayers: number;
  currentPlayers: number;
  minBet: number;
  maxBet: number;
  status: string;
}

export interface SpinResult {
  reels: string[];
  winAmount: number;
  winLines: WinLine[];
  isBonus: boolean;
  newBalance: number;
}

export interface WinLine {
  lineIndex: number;
  symbol: string;
  count: number;
  amount: number;
}

export interface ClientMessage {
  type: 'JOIN_ROOM' | 'LEAVE_ROOM' | 'SPIN' | 'BUY_BONUS';
  playerId?: string;
  roomId?: string;
  betAmount?: number;
  bonusType?: string;
}

export interface ServerMessage {
  type: 'ROOM_UPDATE' | 'PLAYER_UPDATE' | 'SPIN_RESULT' | 'ERROR' | 'SUCCESS' | 'ROOM_LIST' | 'ROOM_JOINED';
  room?: Room;
  player?: Player;
  spinResult?: SpinResult;
  errorMessage?: string;
  availableRooms?: Room[];
}

// 游戏状态
export interface GameState {
  player: Player | null;
  currentRoom: Room | null;
  balance: number;
  isSpinning: boolean;
  lastSpinResult: SpinResult | null;
  availableRooms: Room[];
  connectionStatus: 'disconnected' | 'connecting' | 'connected' | 'error';
}

// 符号配置
export interface SymbolConfig {
  id: string;
  name: string;
  weight: number;
  multiplier: number;
  isWild: boolean;
  isScatter: boolean;
  color: string;
  icon: string;
}