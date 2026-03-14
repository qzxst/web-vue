// package: game
// file: src/proto/Game.proto

import * as jspb from "google-protobuf";

export class Player extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getHp(): number;
  setHp(value: number): void;

  getMaxhp(): number;
  setMaxhp(value: number): void;

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
    id: string,
    name: string,
    hp: number,
    maxhp: number,
  }
}

export class BattleAction extends jspb.Message {
  getPlayerid(): string;
  setPlayerid(value: string): void;

  getAction(): string;
  setAction(value: string): void;

  getTargetid(): string;
  setTargetid(value: string): void;

  getValue(): number;
  setValue(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BattleAction.AsObject;
  static toObject(includeInstance: boolean, msg: BattleAction): BattleAction.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BattleAction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BattleAction;
  static deserializeBinaryFromReader(message: BattleAction, reader: jspb.BinaryReader): BattleAction;
}

export namespace BattleAction {
  export type AsObject = {
    playerid: string,
    action: string,
    targetid: string,
    value: number,
  }
}

export class ClientMessage extends jspb.Message {
  getType(): string;
  setType(value: string): void;

  hasAction(): boolean;
  clearAction(): void;
  getAction(): BattleAction | undefined;
  setAction(value?: BattleAction): void;

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
    action?: BattleAction.AsObject,
  }
}

export class ServerMessage extends jspb.Message {
  getType(): string;
  setType(value: string): void;

  clearPlayersList(): void;
  getPlayersList(): Array<Player>;
  setPlayersList(value: Array<Player>): void;
  addPlayers(value?: Player, index?: number): Player;

  getResult(): string;
  setResult(value: string): void;

  hasPlayer(): boolean;
  clearPlayer(): void;
  getPlayer(): Player | undefined;
  setPlayer(value?: Player): void;

  getIsMyTurn(): boolean;
  setIsMyTurn(value: boolean): void;

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
    playersList: Array<Player.AsObject>,
    result: string,
    player?: Player.AsObject,
    isMyTurn: boolean,
  }
}

