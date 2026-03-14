// package: slot
// file: src/proto/SlotGame.proto

import * as jspb from "google-protobuf";

export class Player extends jspb.Message {
  getPlayerId(): string;
  setPlayerId(value: string): void;

  getPlayerName(): string;
  setPlayerName(value: string): void;

  getBalance(): number;
  setBalance(value: number): void;

  getLevel(): number;
  setLevel(value: number): void;

  getExperience(): number;
  setExperience(value: number): void;

  getLastLoginTime(): number;
  setLastLoginTime(value: number): void;

  getCreatedTime(): number;
  setCreatedTime(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Player.AsObject;
  static toObject(includeInstance: boolean, msg: Player): Player.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Player, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Player;
  static deserializeBinaryFromReader(message: Player, reader: jspb.BinaryReader): Player;
}

export namespace Player {
  export type AsObject = {
    playerId: string,
    playerName: string,
    balance: number,
    level: number,
    experience: number,
    lastLoginTime: number,
    createdTime: number,
  }
}

export class Symbol extends jspb.Message {
  getSymbolId(): string;
  setSymbolId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getWeight(): number;
  setWeight(value: number): void;

  getMultiplier(): number;
  setMultiplier(value: number): void;

  getIsWild(): boolean;
  setIsWild(value: boolean): void;

  getIsScatter(): boolean;
  setIsScatter(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Symbol.AsObject;
  static toObject(includeInstance: boolean, msg: Symbol): Symbol.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Symbol, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Symbol;
  static deserializeBinaryFromReader(message: Symbol, reader: jspb.BinaryReader): Symbol;
}

export namespace Symbol {
  export type AsObject = {
    symbolId: string,
    name: string,
    weight: number,
    multiplier: number,
    isWild: boolean,
    isScatter: boolean,
  }
}

export class SpinResult extends jspb.Message {
  clearReelsList(): void;
  getReelsList(): Array<string>;
  setReelsList(value: Array<string>): void;
  addReels(value: string, index?: number): string;

  getWinAmount(): number;
  setWinAmount(value: number): void;

  clearWinLinesList(): void;
  getWinLinesList(): Array<WinLine>;
  setWinLinesList(value: Array<WinLine>): void;
  addWinLines(value?: WinLine, index?: number): WinLine;

  getIsBonus(): boolean;
  setIsBonus(value: boolean): void;

  getNewBalance(): number;
  setNewBalance(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SpinResult.AsObject;
  static toObject(includeInstance: boolean, msg: SpinResult): SpinResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SpinResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SpinResult;
  static deserializeBinaryFromReader(message: SpinResult, reader: jspb.BinaryReader): SpinResult;
}

export namespace SpinResult {
  export type AsObject = {
    reelsList: Array<string>,
    winAmount: number,
    winLinesList: Array<WinLine.AsObject>,
    isBonus: boolean,
    newBalance: number,
  }
}

export class WinLine extends jspb.Message {
  getLineIndex(): number;
  setLineIndex(value: number): void;

  getSymbol(): string;
  setSymbol(value: string): void;

  getCount(): number;
  setCount(value: number): void;

  getAmount(): number;
  setAmount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WinLine.AsObject;
  static toObject(includeInstance: boolean, msg: WinLine): WinLine.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WinLine, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WinLine;
  static deserializeBinaryFromReader(message: WinLine, reader: jspb.BinaryReader): WinLine;
}

export namespace WinLine {
  export type AsObject = {
    lineIndex: number,
    symbol: string,
    count: number,
    amount: number,
  }
}

export class Room extends jspb.Message {
  getRoomId(): string;
  setRoomId(value: string): void;

  getRoomName(): string;
  setRoomName(value: string): void;

  getMaxPlayers(): number;
  setMaxPlayers(value: number): void;

  getCurrentPlayers(): number;
  setCurrentPlayers(value: number): void;

  getMinBet(): number;
  setMinBet(value: number): void;

  getMaxBet(): number;
  setMaxBet(value: number): void;

  getStatus(): string;
  setStatus(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Room.AsObject;
  static toObject(includeInstance: boolean, msg: Room): Room.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Room, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Room;
  static deserializeBinaryFromReader(message: Room, reader: jspb.BinaryReader): Room;
}

export namespace Room {
  export type AsObject = {
    roomId: string,
    roomName: string,
    maxPlayers: number,
    currentPlayers: number,
    minBet: number,
    maxBet: number,
    status: string,
  }
}

export class ClientMessage extends jspb.Message {
  getType(): string;
  setType(value: string): void;

  getPlayerId(): string;
  setPlayerId(value: string): void;

  getRoomId(): string;
  setRoomId(value: string): void;

  getBetAmount(): number;
  setBetAmount(value: number): void;

  getBonusType(): string;
  setBonusType(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientMessage.AsObject;
  static toObject(includeInstance: boolean, msg: ClientMessage): ClientMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClientMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientMessage;
  static deserializeBinaryFromReader(message: ClientMessage, reader: jspb.BinaryReader): ClientMessage;
}

export namespace ClientMessage {
  export type AsObject = {
    type: string,
    playerId: string,
    roomId: string,
    betAmount: number,
    bonusType: string,
  }
}

export class ServerMessage extends jspb.Message {
  getType(): string;
  setType(value: string): void;

  hasRoom(): boolean;
  clearRoom(): void;
  getRoom(): Room | undefined;
  setRoom(value?: Room): void;

  hasPlayer(): boolean;
  clearPlayer(): void;
  getPlayer(): Player | undefined;
  setPlayer(value?: Player): void;

  hasSpinResult(): boolean;
  clearSpinResult(): void;
  getSpinResult(): SpinResult | undefined;
  setSpinResult(value?: SpinResult): void;

  getErrorMessage(): string;
  setErrorMessage(value: string): void;

  clearAvailableRoomsList(): void;
  getAvailableRoomsList(): Array<Room>;
  setAvailableRoomsList(value: Array<Room>): void;
  addAvailableRooms(value?: Room, index?: number): Room;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessage.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessage): ServerMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessage;
  static deserializeBinaryFromReader(message: ServerMessage, reader: jspb.BinaryReader): ServerMessage;
}

export namespace ServerMessage {
  export type AsObject = {
    type: string,
    room?: Room.AsObject,
    player?: Player.AsObject,
    spinResult?: SpinResult.AsObject,
    errorMessage: string,
    availableRoomsList: Array<Room.AsObject>,
  }
}

