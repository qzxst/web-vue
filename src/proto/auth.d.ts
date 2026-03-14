import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace auth. */
export namespace auth {

    /** Properties of a LoginRequest. */
    interface ILoginRequest {

        /** LoginRequest username */
        username?: (string|null);

        /** LoginRequest password */
        password?: (string|null);
    }

    /** Represents a LoginRequest. */
    class LoginRequest implements ILoginRequest {

        /**
         * Constructs a new LoginRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: auth.ILoginRequest);

        /** LoginRequest username. */
        public username: string;

        /** LoginRequest password. */
        public password: string;

        /**
         * Creates a new LoginRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LoginRequest instance
         */
        public static create(properties?: auth.ILoginRequest): auth.LoginRequest;

        /**
         * Encodes the specified LoginRequest message. Does not implicitly {@link auth.LoginRequest.verify|verify} messages.
         * @param message LoginRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: auth.ILoginRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LoginRequest message, length delimited. Does not implicitly {@link auth.LoginRequest.verify|verify} messages.
         * @param message LoginRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: auth.ILoginRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LoginRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LoginRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): auth.LoginRequest;

        /**
         * Decodes a LoginRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LoginRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): auth.LoginRequest;

        /**
         * Verifies a LoginRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LoginRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LoginRequest
         */
        public static fromObject(object: { [k: string]: any }): auth.LoginRequest;

        /**
         * Creates a plain object from a LoginRequest message. Also converts values to other types if specified.
         * @param message LoginRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: auth.LoginRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LoginRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for LoginRequest
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a LoginResponse. */
    interface ILoginResponse {

        /** LoginResponse code */
        code?: (auth.LoginResponse.ResultCode|null);

        /** LoginResponse token */
        token?: (string|null);

        /** LoginResponse user */
        user?: (auth.IUserInfo|null);

        /** LoginResponse message */
        message?: (string|null);

        /** LoginResponse serverTime */
        serverTime?: (number|Long|null);
    }

    /** Represents a LoginResponse. */
    class LoginResponse implements ILoginResponse {

        /**
         * Constructs a new LoginResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: auth.ILoginResponse);

        /** LoginResponse code. */
        public code: auth.LoginResponse.ResultCode;

        /** LoginResponse token. */
        public token: string;

        /** LoginResponse user. */
        public user?: (auth.IUserInfo|null);

        /** LoginResponse message. */
        public message: string;

        /** LoginResponse serverTime. */
        public serverTime: (number|Long);

        /**
         * Creates a new LoginResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LoginResponse instance
         */
        public static create(properties?: auth.ILoginResponse): auth.LoginResponse;

        /**
         * Encodes the specified LoginResponse message. Does not implicitly {@link auth.LoginResponse.verify|verify} messages.
         * @param message LoginResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: auth.ILoginResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LoginResponse message, length delimited. Does not implicitly {@link auth.LoginResponse.verify|verify} messages.
         * @param message LoginResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: auth.ILoginResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LoginResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LoginResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): auth.LoginResponse;

        /**
         * Decodes a LoginResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LoginResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): auth.LoginResponse;

        /**
         * Verifies a LoginResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LoginResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LoginResponse
         */
        public static fromObject(object: { [k: string]: any }): auth.LoginResponse;

        /**
         * Creates a plain object from a LoginResponse message. Also converts values to other types if specified.
         * @param message LoginResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: auth.LoginResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LoginResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for LoginResponse
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace LoginResponse {

        /** ResultCode enum. */
        enum ResultCode {
            SUCCESS = 0,
            FAILED = 1,
            INVALID_CREDENTIALS = 2,
            USER_LOCKED = 3
        }
    }

    /** Properties of a UserInfo. */
    interface IUserInfo {

        /** UserInfo userId */
        userId?: (number|Long|null);

        /** UserInfo username */
        username?: (string|null);

        /** UserInfo nickname */
        nickname?: (string|null);

        /** UserInfo level */
        level?: (number|null);

        /** UserInfo exp */
        exp?: (number|Long|null);

        /** UserInfo coins */
        coins?: (number|Long|null);

        /** UserInfo vipLevel */
        vipLevel?: (number|null);

        /** UserInfo unlockedAvatars */
        unlockedAvatars?: (number[]|null);

        /** UserInfo registerTime */
        registerTime?: (number|Long|null);

        /** UserInfo lastLoginTime */
        lastLoginTime?: (number|Long|null);
    }

    /** Represents a UserInfo. */
    class UserInfo implements IUserInfo {

        /**
         * Constructs a new UserInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: auth.IUserInfo);

        /** UserInfo userId. */
        public userId: (number|Long);

        /** UserInfo username. */
        public username: string;

        /** UserInfo nickname. */
        public nickname: string;

        /** UserInfo level. */
        public level: number;

        /** UserInfo exp. */
        public exp: (number|Long);

        /** UserInfo coins. */
        public coins: (number|Long);

        /** UserInfo vipLevel. */
        public vipLevel: number;

        /** UserInfo unlockedAvatars. */
        public unlockedAvatars: number[];

        /** UserInfo registerTime. */
        public registerTime: (number|Long);

        /** UserInfo lastLoginTime. */
        public lastLoginTime: (number|Long);

        /**
         * Creates a new UserInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserInfo instance
         */
        public static create(properties?: auth.IUserInfo): auth.UserInfo;

        /**
         * Encodes the specified UserInfo message. Does not implicitly {@link auth.UserInfo.verify|verify} messages.
         * @param message UserInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: auth.IUserInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserInfo message, length delimited. Does not implicitly {@link auth.UserInfo.verify|verify} messages.
         * @param message UserInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: auth.IUserInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): auth.UserInfo;

        /**
         * Decodes a UserInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): auth.UserInfo;

        /**
         * Verifies a UserInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserInfo
         */
        public static fromObject(object: { [k: string]: any }): auth.UserInfo;

        /**
         * Creates a plain object from a UserInfo message. Also converts values to other types if specified.
         * @param message UserInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: auth.UserInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for UserInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a BaseResponse. */
    interface IBaseResponse {

        /** BaseResponse code */
        code?: (number|null);

        /** BaseResponse message */
        message?: (string|null);

        /** BaseResponse timestamp */
        timestamp?: (number|Long|null);
    }

    /** Represents a BaseResponse. */
    class BaseResponse implements IBaseResponse {

        /**
         * Constructs a new BaseResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: auth.IBaseResponse);

        /** BaseResponse code. */
        public code: number;

        /** BaseResponse message. */
        public message: string;

        /** BaseResponse timestamp. */
        public timestamp: (number|Long);

        /**
         * Creates a new BaseResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BaseResponse instance
         */
        public static create(properties?: auth.IBaseResponse): auth.BaseResponse;

        /**
         * Encodes the specified BaseResponse message. Does not implicitly {@link auth.BaseResponse.verify|verify} messages.
         * @param message BaseResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: auth.IBaseResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BaseResponse message, length delimited. Does not implicitly {@link auth.BaseResponse.verify|verify} messages.
         * @param message BaseResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: auth.IBaseResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BaseResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BaseResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): auth.BaseResponse;

        /**
         * Decodes a BaseResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BaseResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): auth.BaseResponse;

        /**
         * Verifies a BaseResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BaseResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BaseResponse
         */
        public static fromObject(object: { [k: string]: any }): auth.BaseResponse;

        /**
         * Creates a plain object from a BaseResponse message. Also converts values to other types if specified.
         * @param message BaseResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: auth.BaseResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BaseResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for BaseResponse
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a HeartbeatRequest. */
    interface IHeartbeatRequest {

        /** HeartbeatRequest clientTime */
        clientTime?: (number|Long|null);
    }

    /** Represents a HeartbeatRequest. */
    class HeartbeatRequest implements IHeartbeatRequest {

        /**
         * Constructs a new HeartbeatRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: auth.IHeartbeatRequest);

        /** HeartbeatRequest clientTime. */
        public clientTime: (number|Long);

        /**
         * Creates a new HeartbeatRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HeartbeatRequest instance
         */
        public static create(properties?: auth.IHeartbeatRequest): auth.HeartbeatRequest;

        /**
         * Encodes the specified HeartbeatRequest message. Does not implicitly {@link auth.HeartbeatRequest.verify|verify} messages.
         * @param message HeartbeatRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: auth.IHeartbeatRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified HeartbeatRequest message, length delimited. Does not implicitly {@link auth.HeartbeatRequest.verify|verify} messages.
         * @param message HeartbeatRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: auth.IHeartbeatRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HeartbeatRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HeartbeatRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): auth.HeartbeatRequest;

        /**
         * Decodes a HeartbeatRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HeartbeatRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): auth.HeartbeatRequest;

        /**
         * Verifies a HeartbeatRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a HeartbeatRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HeartbeatRequest
         */
        public static fromObject(object: { [k: string]: any }): auth.HeartbeatRequest;

        /**
         * Creates a plain object from a HeartbeatRequest message. Also converts values to other types if specified.
         * @param message HeartbeatRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: auth.HeartbeatRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HeartbeatRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for HeartbeatRequest
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a HeartbeatResponse. */
    interface IHeartbeatResponse {

        /** HeartbeatResponse clientTime */
        clientTime?: (number|Long|null);

        /** HeartbeatResponse serverTime */
        serverTime?: (number|Long|null);
    }

    /** Represents a HeartbeatResponse. */
    class HeartbeatResponse implements IHeartbeatResponse {

        /**
         * Constructs a new HeartbeatResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: auth.IHeartbeatResponse);

        /** HeartbeatResponse clientTime. */
        public clientTime: (number|Long);

        /** HeartbeatResponse serverTime. */
        public serverTime: (number|Long);

        /**
         * Creates a new HeartbeatResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HeartbeatResponse instance
         */
        public static create(properties?: auth.IHeartbeatResponse): auth.HeartbeatResponse;

        /**
         * Encodes the specified HeartbeatResponse message. Does not implicitly {@link auth.HeartbeatResponse.verify|verify} messages.
         * @param message HeartbeatResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: auth.IHeartbeatResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified HeartbeatResponse message, length delimited. Does not implicitly {@link auth.HeartbeatResponse.verify|verify} messages.
         * @param message HeartbeatResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: auth.IHeartbeatResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HeartbeatResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HeartbeatResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): auth.HeartbeatResponse;

        /**
         * Decodes a HeartbeatResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HeartbeatResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): auth.HeartbeatResponse;

        /**
         * Verifies a HeartbeatResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a HeartbeatResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HeartbeatResponse
         */
        public static fromObject(object: { [k: string]: any }): auth.HeartbeatResponse;

        /**
         * Creates a plain object from a HeartbeatResponse message. Also converts values to other types if specified.
         * @param message HeartbeatResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: auth.HeartbeatResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HeartbeatResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for HeartbeatResponse
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}
