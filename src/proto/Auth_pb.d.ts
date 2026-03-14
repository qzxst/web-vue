// package: auth
// file: src/proto/Auth.proto

import * as jspb from "google-protobuf";

export class LoginRequest extends jspb.Message {
  getUsername(): string;
  setUsername(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LoginRequest): LoginRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LoginRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginRequest;
  static deserializeBinaryFromReader(message: LoginRequest, reader: jspb.BinaryReader): LoginRequest;
}

export namespace LoginRequest {
  export type AsObject = {
    username: string,
    password: string,
  }
}

export class LoginResponse extends jspb.Message {
  getCode(): LoginResponse.ResultCodeMap[keyof LoginResponse.ResultCodeMap];
  setCode(value: LoginResponse.ResultCodeMap[keyof LoginResponse.ResultCodeMap]): void;

  getToken(): string;
  setToken(value: string): void;

  hasUser(): boolean;
  clearUser(): void;
  getUser(): UserInfo | undefined;
  setUser(value?: UserInfo): void;

  getMessage(): string;
  setMessage(value: string): void;

  getServerTime(): number;
  setServerTime(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LoginResponse): LoginResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LoginResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginResponse;
  static deserializeBinaryFromReader(message: LoginResponse, reader: jspb.BinaryReader): LoginResponse;
}

export namespace LoginResponse {
  export type AsObject = {
    code: LoginResponse.ResultCodeMap[keyof LoginResponse.ResultCodeMap],
    token: string,
    user?: UserInfo.AsObject,
    message: string,
    serverTime: number,
  }

  export interface ResultCodeMap {
    SUCCESS: 0;
    FAILED: 1;
    INVALID_CREDENTIALS: 2;
    USER_LOCKED: 3;
  }

  export const ResultCode: ResultCodeMap;
}

export class UserInfo extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): void;

  getUsername(): string;
  setUsername(value: string): void;

  getNickname(): string;
  setNickname(value: string): void;

  getLevel(): number;
  setLevel(value: number): void;

  getExp(): number;
  setExp(value: number): void;

  getCoins(): number;
  setCoins(value: number): void;

  getVipLevel(): number;
  setVipLevel(value: number): void;

  clearUnlockedAvatarsList(): void;
  getUnlockedAvatarsList(): Array<number>;
  setUnlockedAvatarsList(value: Array<number>): void;
  addUnlockedAvatars(value: number, index?: number): number;

  getRegisterTime(): number;
  setRegisterTime(value: number): void;

  getLastLoginTime(): number;
  setLastLoginTime(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserInfo.AsObject;
  static toObject(includeInstance: boolean, msg: UserInfo): UserInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserInfo;
  static deserializeBinaryFromReader(message: UserInfo, reader: jspb.BinaryReader): UserInfo;
}

export namespace UserInfo {
  export type AsObject = {
    userId: number,
    username: string,
    nickname: string,
    level: number,
    exp: number,
    coins: number,
    vipLevel: number,
    unlockedAvatarsList: Array<number>,
    registerTime: number,
    lastLoginTime: number,
  }
}

export class BaseResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getMessage(): string;
  setMessage(value: string): void;

  getTimestamp(): number;
  setTimestamp(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BaseResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BaseResponse): BaseResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BaseResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BaseResponse;
  static deserializeBinaryFromReader(message: BaseResponse, reader: jspb.BinaryReader): BaseResponse;
}

export namespace BaseResponse {
  export type AsObject = {
    code: number,
    message: string,
    timestamp: number,
  }
}

export class HeartbeatRequest extends jspb.Message {
  getClientTime(): number;
  setClientTime(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HeartbeatRequest.AsObject;
  static toObject(includeInstance: boolean, msg: HeartbeatRequest): HeartbeatRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HeartbeatRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HeartbeatRequest;
  static deserializeBinaryFromReader(message: HeartbeatRequest, reader: jspb.BinaryReader): HeartbeatRequest;
}

export namespace HeartbeatRequest {
  export type AsObject = {
    clientTime: number,
  }
}

export class HeartbeatResponse extends jspb.Message {
  getClientTime(): number;
  setClientTime(value: number): void;

  getServerTime(): number;
  setServerTime(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HeartbeatResponse.AsObject;
  static toObject(includeInstance: boolean, msg: HeartbeatResponse): HeartbeatResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HeartbeatResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HeartbeatResponse;
  static deserializeBinaryFromReader(message: HeartbeatResponse, reader: jspb.BinaryReader): HeartbeatResponse;
}

export namespace HeartbeatResponse {
  export type AsObject = {
    clientTime: number,
    serverTime: number,
  }
}

