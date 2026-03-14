/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const auth = $root.auth = (() => {

    /**
     * Namespace auth.
     * @exports auth
     * @namespace
     */
    const auth = {};

    auth.LoginRequest = (function() {

        /**
         * Properties of a LoginRequest.
         * @memberof auth
         * @interface ILoginRequest
         * @property {string|null} [username] LoginRequest username
         * @property {string|null} [password] LoginRequest password
         */

        /**
         * Constructs a new LoginRequest.
         * @memberof auth
         * @classdesc Represents a LoginRequest.
         * @implements ILoginRequest
         * @constructor
         * @param {auth.ILoginRequest=} [properties] Properties to set
         */
        function LoginRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LoginRequest username.
         * @member {string} username
         * @memberof auth.LoginRequest
         * @instance
         */
        LoginRequest.prototype.username = "";

        /**
         * LoginRequest password.
         * @member {string} password
         * @memberof auth.LoginRequest
         * @instance
         */
        LoginRequest.prototype.password = "";

        /**
         * Creates a new LoginRequest instance using the specified properties.
         * @function create
         * @memberof auth.LoginRequest
         * @static
         * @param {auth.ILoginRequest=} [properties] Properties to set
         * @returns {auth.LoginRequest} LoginRequest instance
         */
        LoginRequest.create = function create(properties) {
            return new LoginRequest(properties);
        };

        /**
         * Encodes the specified LoginRequest message. Does not implicitly {@link auth.LoginRequest.verify|verify} messages.
         * @function encode
         * @memberof auth.LoginRequest
         * @static
         * @param {auth.ILoginRequest} message LoginRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.username != null && Object.hasOwnProperty.call(message, "username"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.username);
            if (message.password != null && Object.hasOwnProperty.call(message, "password"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.password);
            return writer;
        };

        /**
         * Encodes the specified LoginRequest message, length delimited. Does not implicitly {@link auth.LoginRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof auth.LoginRequest
         * @static
         * @param {auth.ILoginRequest} message LoginRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LoginRequest message from the specified reader or buffer.
         * @function decode
         * @memberof auth.LoginRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {auth.LoginRequest} LoginRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginRequest.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.auth.LoginRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.username = reader.string();
                        break;
                    }
                case 2: {
                        message.password = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LoginRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof auth.LoginRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {auth.LoginRequest} LoginRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LoginRequest message.
         * @function verify
         * @memberof auth.LoginRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LoginRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.username != null && message.hasOwnProperty("username"))
                if (!$util.isString(message.username))
                    return "username: string expected";
            if (message.password != null && message.hasOwnProperty("password"))
                if (!$util.isString(message.password))
                    return "password: string expected";
            return null;
        };

        /**
         * Creates a LoginRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof auth.LoginRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {auth.LoginRequest} LoginRequest
         */
        LoginRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.auth.LoginRequest)
                return object;
            let message = new $root.auth.LoginRequest();
            if (object.username != null)
                message.username = String(object.username);
            if (object.password != null)
                message.password = String(object.password);
            return message;
        };

        /**
         * Creates a plain object from a LoginRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof auth.LoginRequest
         * @static
         * @param {auth.LoginRequest} message LoginRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LoginRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.username = "";
                object.password = "";
            }
            if (message.username != null && message.hasOwnProperty("username"))
                object.username = message.username;
            if (message.password != null && message.hasOwnProperty("password"))
                object.password = message.password;
            return object;
        };

        /**
         * Converts this LoginRequest to JSON.
         * @function toJSON
         * @memberof auth.LoginRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LoginRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for LoginRequest
         * @function getTypeUrl
         * @memberof auth.LoginRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        LoginRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/auth.LoginRequest";
        };

        return LoginRequest;
    })();

    auth.LoginResponse = (function() {

        /**
         * Properties of a LoginResponse.
         * @memberof auth
         * @interface ILoginResponse
         * @property {auth.LoginResponse.ResultCode|null} [code] LoginResponse code
         * @property {string|null} [token] LoginResponse token
         * @property {auth.IUserInfo|null} [user] LoginResponse user
         * @property {string|null} [message] LoginResponse message
         * @property {number|Long|null} [serverTime] LoginResponse serverTime
         */

        /**
         * Constructs a new LoginResponse.
         * @memberof auth
         * @classdesc Represents a LoginResponse.
         * @implements ILoginResponse
         * @constructor
         * @param {auth.ILoginResponse=} [properties] Properties to set
         */
        function LoginResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LoginResponse code.
         * @member {auth.LoginResponse.ResultCode} code
         * @memberof auth.LoginResponse
         * @instance
         */
        LoginResponse.prototype.code = 0;

        /**
         * LoginResponse token.
         * @member {string} token
         * @memberof auth.LoginResponse
         * @instance
         */
        LoginResponse.prototype.token = "";

        /**
         * LoginResponse user.
         * @member {auth.IUserInfo|null|undefined} user
         * @memberof auth.LoginResponse
         * @instance
         */
        LoginResponse.prototype.user = null;

        /**
         * LoginResponse message.
         * @member {string} message
         * @memberof auth.LoginResponse
         * @instance
         */
        LoginResponse.prototype.message = "";

        /**
         * LoginResponse serverTime.
         * @member {number|Long} serverTime
         * @memberof auth.LoginResponse
         * @instance
         */
        LoginResponse.prototype.serverTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new LoginResponse instance using the specified properties.
         * @function create
         * @memberof auth.LoginResponse
         * @static
         * @param {auth.ILoginResponse=} [properties] Properties to set
         * @returns {auth.LoginResponse} LoginResponse instance
         */
        LoginResponse.create = function create(properties) {
            return new LoginResponse(properties);
        };

        /**
         * Encodes the specified LoginResponse message. Does not implicitly {@link auth.LoginResponse.verify|verify} messages.
         * @function encode
         * @memberof auth.LoginResponse
         * @static
         * @param {auth.ILoginResponse} message LoginResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.token != null && Object.hasOwnProperty.call(message, "token"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.token);
            if (message.user != null && Object.hasOwnProperty.call(message, "user"))
                $root.auth.UserInfo.encode(message.user, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.message);
            if (message.serverTime != null && Object.hasOwnProperty.call(message, "serverTime"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.serverTime);
            return writer;
        };

        /**
         * Encodes the specified LoginResponse message, length delimited. Does not implicitly {@link auth.LoginResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof auth.LoginResponse
         * @static
         * @param {auth.ILoginResponse} message LoginResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LoginResponse message from the specified reader or buffer.
         * @function decode
         * @memberof auth.LoginResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {auth.LoginResponse} LoginResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginResponse.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.auth.LoginResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.code = reader.int32();
                        break;
                    }
                case 2: {
                        message.token = reader.string();
                        break;
                    }
                case 3: {
                        message.user = $root.auth.UserInfo.decode(reader, reader.uint32());
                        break;
                    }
                case 4: {
                        message.message = reader.string();
                        break;
                    }
                case 5: {
                        message.serverTime = reader.int64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LoginResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof auth.LoginResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {auth.LoginResponse} LoginResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LoginResponse message.
         * @function verify
         * @memberof auth.LoginResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LoginResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                switch (message.code) {
                default:
                    return "code: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            if (message.token != null && message.hasOwnProperty("token"))
                if (!$util.isString(message.token))
                    return "token: string expected";
            if (message.user != null && message.hasOwnProperty("user")) {
                let error = $root.auth.UserInfo.verify(message.user);
                if (error)
                    return "user." + error;
            }
            if (message.message != null && message.hasOwnProperty("message"))
                if (!$util.isString(message.message))
                    return "message: string expected";
            if (message.serverTime != null && message.hasOwnProperty("serverTime"))
                if (!$util.isInteger(message.serverTime) && !(message.serverTime && $util.isInteger(message.serverTime.low) && $util.isInteger(message.serverTime.high)))
                    return "serverTime: integer|Long expected";
            return null;
        };

        /**
         * Creates a LoginResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof auth.LoginResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {auth.LoginResponse} LoginResponse
         */
        LoginResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.auth.LoginResponse)
                return object;
            let message = new $root.auth.LoginResponse();
            switch (object.code) {
            default:
                if (typeof object.code === "number") {
                    message.code = object.code;
                    break;
                }
                break;
            case "SUCCESS":
            case 0:
                message.code = 0;
                break;
            case "FAILED":
            case 1:
                message.code = 1;
                break;
            case "INVALID_CREDENTIALS":
            case 2:
                message.code = 2;
                break;
            case "USER_LOCKED":
            case 3:
                message.code = 3;
                break;
            }
            if (object.token != null)
                message.token = String(object.token);
            if (object.user != null) {
                if (typeof object.user !== "object")
                    throw TypeError(".auth.LoginResponse.user: object expected");
                message.user = $root.auth.UserInfo.fromObject(object.user);
            }
            if (object.message != null)
                message.message = String(object.message);
            if (object.serverTime != null)
                if ($util.Long)
                    (message.serverTime = $util.Long.fromValue(object.serverTime)).unsigned = false;
                else if (typeof object.serverTime === "string")
                    message.serverTime = parseInt(object.serverTime, 10);
                else if (typeof object.serverTime === "number")
                    message.serverTime = object.serverTime;
                else if (typeof object.serverTime === "object")
                    message.serverTime = new $util.LongBits(object.serverTime.low >>> 0, object.serverTime.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a LoginResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof auth.LoginResponse
         * @static
         * @param {auth.LoginResponse} message LoginResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LoginResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.code = options.enums === String ? "SUCCESS" : 0;
                object.token = "";
                object.user = null;
                object.message = "";
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.serverTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.serverTime = options.longs === String ? "0" : 0;
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = options.enums === String ? $root.auth.LoginResponse.ResultCode[message.code] === undefined ? message.code : $root.auth.LoginResponse.ResultCode[message.code] : message.code;
            if (message.token != null && message.hasOwnProperty("token"))
                object.token = message.token;
            if (message.user != null && message.hasOwnProperty("user"))
                object.user = $root.auth.UserInfo.toObject(message.user, options);
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = message.message;
            if (message.serverTime != null && message.hasOwnProperty("serverTime"))
                if (typeof message.serverTime === "number")
                    object.serverTime = options.longs === String ? String(message.serverTime) : message.serverTime;
                else
                    object.serverTime = options.longs === String ? $util.Long.prototype.toString.call(message.serverTime) : options.longs === Number ? new $util.LongBits(message.serverTime.low >>> 0, message.serverTime.high >>> 0).toNumber() : message.serverTime;
            return object;
        };

        /**
         * Converts this LoginResponse to JSON.
         * @function toJSON
         * @memberof auth.LoginResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LoginResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for LoginResponse
         * @function getTypeUrl
         * @memberof auth.LoginResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        LoginResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/auth.LoginResponse";
        };

        /**
         * ResultCode enum.
         * @name auth.LoginResponse.ResultCode
         * @enum {number}
         * @property {number} SUCCESS=0 SUCCESS value
         * @property {number} FAILED=1 FAILED value
         * @property {number} INVALID_CREDENTIALS=2 INVALID_CREDENTIALS value
         * @property {number} USER_LOCKED=3 USER_LOCKED value
         */
        LoginResponse.ResultCode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "SUCCESS"] = 0;
            values[valuesById[1] = "FAILED"] = 1;
            values[valuesById[2] = "INVALID_CREDENTIALS"] = 2;
            values[valuesById[3] = "USER_LOCKED"] = 3;
            return values;
        })();

        return LoginResponse;
    })();

    auth.UserInfo = (function() {

        /**
         * Properties of a UserInfo.
         * @memberof auth
         * @interface IUserInfo
         * @property {number|Long|null} [userId] UserInfo userId
         * @property {string|null} [username] UserInfo username
         * @property {string|null} [nickname] UserInfo nickname
         * @property {number|null} [level] UserInfo level
         * @property {number|Long|null} [exp] UserInfo exp
         * @property {number|Long|null} [coins] UserInfo coins
         * @property {number|null} [vipLevel] UserInfo vipLevel
         * @property {Array.<number>|null} [unlockedAvatars] UserInfo unlockedAvatars
         * @property {number|Long|null} [registerTime] UserInfo registerTime
         * @property {number|Long|null} [lastLoginTime] UserInfo lastLoginTime
         */

        /**
         * Constructs a new UserInfo.
         * @memberof auth
         * @classdesc Represents a UserInfo.
         * @implements IUserInfo
         * @constructor
         * @param {auth.IUserInfo=} [properties] Properties to set
         */
        function UserInfo(properties) {
            this.unlockedAvatars = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserInfo userId.
         * @member {number|Long} userId
         * @memberof auth.UserInfo
         * @instance
         */
        UserInfo.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * UserInfo username.
         * @member {string} username
         * @memberof auth.UserInfo
         * @instance
         */
        UserInfo.prototype.username = "";

        /**
         * UserInfo nickname.
         * @member {string} nickname
         * @memberof auth.UserInfo
         * @instance
         */
        UserInfo.prototype.nickname = "";

        /**
         * UserInfo level.
         * @member {number} level
         * @memberof auth.UserInfo
         * @instance
         */
        UserInfo.prototype.level = 0;

        /**
         * UserInfo exp.
         * @member {number|Long} exp
         * @memberof auth.UserInfo
         * @instance
         */
        UserInfo.prototype.exp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * UserInfo coins.
         * @member {number|Long} coins
         * @memberof auth.UserInfo
         * @instance
         */
        UserInfo.prototype.coins = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * UserInfo vipLevel.
         * @member {number} vipLevel
         * @memberof auth.UserInfo
         * @instance
         */
        UserInfo.prototype.vipLevel = 0;

        /**
         * UserInfo unlockedAvatars.
         * @member {Array.<number>} unlockedAvatars
         * @memberof auth.UserInfo
         * @instance
         */
        UserInfo.prototype.unlockedAvatars = $util.emptyArray;

        /**
         * UserInfo registerTime.
         * @member {number|Long} registerTime
         * @memberof auth.UserInfo
         * @instance
         */
        UserInfo.prototype.registerTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * UserInfo lastLoginTime.
         * @member {number|Long} lastLoginTime
         * @memberof auth.UserInfo
         * @instance
         */
        UserInfo.prototype.lastLoginTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new UserInfo instance using the specified properties.
         * @function create
         * @memberof auth.UserInfo
         * @static
         * @param {auth.IUserInfo=} [properties] Properties to set
         * @returns {auth.UserInfo} UserInfo instance
         */
        UserInfo.create = function create(properties) {
            return new UserInfo(properties);
        };

        /**
         * Encodes the specified UserInfo message. Does not implicitly {@link auth.UserInfo.verify|verify} messages.
         * @function encode
         * @memberof auth.UserInfo
         * @static
         * @param {auth.IUserInfo} message UserInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.userId);
            if (message.username != null && Object.hasOwnProperty.call(message, "username"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.username);
            if (message.nickname != null && Object.hasOwnProperty.call(message, "nickname"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.nickname);
            if (message.level != null && Object.hasOwnProperty.call(message, "level"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.level);
            if (message.exp != null && Object.hasOwnProperty.call(message, "exp"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.exp);
            if (message.coins != null && Object.hasOwnProperty.call(message, "coins"))
                writer.uint32(/* id 6, wireType 0 =*/48).int64(message.coins);
            if (message.vipLevel != null && Object.hasOwnProperty.call(message, "vipLevel"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.vipLevel);
            if (message.unlockedAvatars != null && message.unlockedAvatars.length) {
                writer.uint32(/* id 8, wireType 2 =*/66).fork();
                for (let i = 0; i < message.unlockedAvatars.length; ++i)
                    writer.int32(message.unlockedAvatars[i]);
                writer.ldelim();
            }
            if (message.registerTime != null && Object.hasOwnProperty.call(message, "registerTime"))
                writer.uint32(/* id 9, wireType 0 =*/72).int64(message.registerTime);
            if (message.lastLoginTime != null && Object.hasOwnProperty.call(message, "lastLoginTime"))
                writer.uint32(/* id 10, wireType 0 =*/80).int64(message.lastLoginTime);
            return writer;
        };

        /**
         * Encodes the specified UserInfo message, length delimited. Does not implicitly {@link auth.UserInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof auth.UserInfo
         * @static
         * @param {auth.IUserInfo} message UserInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserInfo message from the specified reader or buffer.
         * @function decode
         * @memberof auth.UserInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {auth.UserInfo} UserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserInfo.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.auth.UserInfo();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.userId = reader.int64();
                        break;
                    }
                case 2: {
                        message.username = reader.string();
                        break;
                    }
                case 3: {
                        message.nickname = reader.string();
                        break;
                    }
                case 4: {
                        message.level = reader.int32();
                        break;
                    }
                case 5: {
                        message.exp = reader.int64();
                        break;
                    }
                case 6: {
                        message.coins = reader.int64();
                        break;
                    }
                case 7: {
                        message.vipLevel = reader.int32();
                        break;
                    }
                case 8: {
                        if (!(message.unlockedAvatars && message.unlockedAvatars.length))
                            message.unlockedAvatars = [];
                        if ((tag & 7) === 2) {
                            let end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.unlockedAvatars.push(reader.int32());
                        } else
                            message.unlockedAvatars.push(reader.int32());
                        break;
                    }
                case 9: {
                        message.registerTime = reader.int64();
                        break;
                    }
                case 10: {
                        message.lastLoginTime = reader.int64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a UserInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof auth.UserInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {auth.UserInfo} UserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserInfo message.
         * @function verify
         * @memberof auth.UserInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                    return "userId: integer|Long expected";
            if (message.username != null && message.hasOwnProperty("username"))
                if (!$util.isString(message.username))
                    return "username: string expected";
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                if (!$util.isString(message.nickname))
                    return "nickname: string expected";
            if (message.level != null && message.hasOwnProperty("level"))
                if (!$util.isInteger(message.level))
                    return "level: integer expected";
            if (message.exp != null && message.hasOwnProperty("exp"))
                if (!$util.isInteger(message.exp) && !(message.exp && $util.isInteger(message.exp.low) && $util.isInteger(message.exp.high)))
                    return "exp: integer|Long expected";
            if (message.coins != null && message.hasOwnProperty("coins"))
                if (!$util.isInteger(message.coins) && !(message.coins && $util.isInteger(message.coins.low) && $util.isInteger(message.coins.high)))
                    return "coins: integer|Long expected";
            if (message.vipLevel != null && message.hasOwnProperty("vipLevel"))
                if (!$util.isInteger(message.vipLevel))
                    return "vipLevel: integer expected";
            if (message.unlockedAvatars != null && message.hasOwnProperty("unlockedAvatars")) {
                if (!Array.isArray(message.unlockedAvatars))
                    return "unlockedAvatars: array expected";
                for (let i = 0; i < message.unlockedAvatars.length; ++i)
                    if (!$util.isInteger(message.unlockedAvatars[i]))
                        return "unlockedAvatars: integer[] expected";
            }
            if (message.registerTime != null && message.hasOwnProperty("registerTime"))
                if (!$util.isInteger(message.registerTime) && !(message.registerTime && $util.isInteger(message.registerTime.low) && $util.isInteger(message.registerTime.high)))
                    return "registerTime: integer|Long expected";
            if (message.lastLoginTime != null && message.hasOwnProperty("lastLoginTime"))
                if (!$util.isInteger(message.lastLoginTime) && !(message.lastLoginTime && $util.isInteger(message.lastLoginTime.low) && $util.isInteger(message.lastLoginTime.high)))
                    return "lastLoginTime: integer|Long expected";
            return null;
        };

        /**
         * Creates a UserInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof auth.UserInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {auth.UserInfo} UserInfo
         */
        UserInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.auth.UserInfo)
                return object;
            let message = new $root.auth.UserInfo();
            if (object.userId != null)
                if ($util.Long)
                    (message.userId = $util.Long.fromValue(object.userId)).unsigned = false;
                else if (typeof object.userId === "string")
                    message.userId = parseInt(object.userId, 10);
                else if (typeof object.userId === "number")
                    message.userId = object.userId;
                else if (typeof object.userId === "object")
                    message.userId = new $util.LongBits(object.userId.low >>> 0, object.userId.high >>> 0).toNumber();
            if (object.username != null)
                message.username = String(object.username);
            if (object.nickname != null)
                message.nickname = String(object.nickname);
            if (object.level != null)
                message.level = object.level | 0;
            if (object.exp != null)
                if ($util.Long)
                    (message.exp = $util.Long.fromValue(object.exp)).unsigned = false;
                else if (typeof object.exp === "string")
                    message.exp = parseInt(object.exp, 10);
                else if (typeof object.exp === "number")
                    message.exp = object.exp;
                else if (typeof object.exp === "object")
                    message.exp = new $util.LongBits(object.exp.low >>> 0, object.exp.high >>> 0).toNumber();
            if (object.coins != null)
                if ($util.Long)
                    (message.coins = $util.Long.fromValue(object.coins)).unsigned = false;
                else if (typeof object.coins === "string")
                    message.coins = parseInt(object.coins, 10);
                else if (typeof object.coins === "number")
                    message.coins = object.coins;
                else if (typeof object.coins === "object")
                    message.coins = new $util.LongBits(object.coins.low >>> 0, object.coins.high >>> 0).toNumber();
            if (object.vipLevel != null)
                message.vipLevel = object.vipLevel | 0;
            if (object.unlockedAvatars) {
                if (!Array.isArray(object.unlockedAvatars))
                    throw TypeError(".auth.UserInfo.unlockedAvatars: array expected");
                message.unlockedAvatars = [];
                for (let i = 0; i < object.unlockedAvatars.length; ++i)
                    message.unlockedAvatars[i] = object.unlockedAvatars[i] | 0;
            }
            if (object.registerTime != null)
                if ($util.Long)
                    (message.registerTime = $util.Long.fromValue(object.registerTime)).unsigned = false;
                else if (typeof object.registerTime === "string")
                    message.registerTime = parseInt(object.registerTime, 10);
                else if (typeof object.registerTime === "number")
                    message.registerTime = object.registerTime;
                else if (typeof object.registerTime === "object")
                    message.registerTime = new $util.LongBits(object.registerTime.low >>> 0, object.registerTime.high >>> 0).toNumber();
            if (object.lastLoginTime != null)
                if ($util.Long)
                    (message.lastLoginTime = $util.Long.fromValue(object.lastLoginTime)).unsigned = false;
                else if (typeof object.lastLoginTime === "string")
                    message.lastLoginTime = parseInt(object.lastLoginTime, 10);
                else if (typeof object.lastLoginTime === "number")
                    message.lastLoginTime = object.lastLoginTime;
                else if (typeof object.lastLoginTime === "object")
                    message.lastLoginTime = new $util.LongBits(object.lastLoginTime.low >>> 0, object.lastLoginTime.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a UserInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof auth.UserInfo
         * @static
         * @param {auth.UserInfo} message UserInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.unlockedAvatars = [];
            if (options.defaults) {
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.userId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.userId = options.longs === String ? "0" : 0;
                object.username = "";
                object.nickname = "";
                object.level = 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.exp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.exp = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.coins = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.coins = options.longs === String ? "0" : 0;
                object.vipLevel = 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.registerTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.registerTime = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.lastLoginTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.lastLoginTime = options.longs === String ? "0" : 0;
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (typeof message.userId === "number")
                    object.userId = options.longs === String ? String(message.userId) : message.userId;
                else
                    object.userId = options.longs === String ? $util.Long.prototype.toString.call(message.userId) : options.longs === Number ? new $util.LongBits(message.userId.low >>> 0, message.userId.high >>> 0).toNumber() : message.userId;
            if (message.username != null && message.hasOwnProperty("username"))
                object.username = message.username;
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                object.nickname = message.nickname;
            if (message.level != null && message.hasOwnProperty("level"))
                object.level = message.level;
            if (message.exp != null && message.hasOwnProperty("exp"))
                if (typeof message.exp === "number")
                    object.exp = options.longs === String ? String(message.exp) : message.exp;
                else
                    object.exp = options.longs === String ? $util.Long.prototype.toString.call(message.exp) : options.longs === Number ? new $util.LongBits(message.exp.low >>> 0, message.exp.high >>> 0).toNumber() : message.exp;
            if (message.coins != null && message.hasOwnProperty("coins"))
                if (typeof message.coins === "number")
                    object.coins = options.longs === String ? String(message.coins) : message.coins;
                else
                    object.coins = options.longs === String ? $util.Long.prototype.toString.call(message.coins) : options.longs === Number ? new $util.LongBits(message.coins.low >>> 0, message.coins.high >>> 0).toNumber() : message.coins;
            if (message.vipLevel != null && message.hasOwnProperty("vipLevel"))
                object.vipLevel = message.vipLevel;
            if (message.unlockedAvatars && message.unlockedAvatars.length) {
                object.unlockedAvatars = [];
                for (let j = 0; j < message.unlockedAvatars.length; ++j)
                    object.unlockedAvatars[j] = message.unlockedAvatars[j];
            }
            if (message.registerTime != null && message.hasOwnProperty("registerTime"))
                if (typeof message.registerTime === "number")
                    object.registerTime = options.longs === String ? String(message.registerTime) : message.registerTime;
                else
                    object.registerTime = options.longs === String ? $util.Long.prototype.toString.call(message.registerTime) : options.longs === Number ? new $util.LongBits(message.registerTime.low >>> 0, message.registerTime.high >>> 0).toNumber() : message.registerTime;
            if (message.lastLoginTime != null && message.hasOwnProperty("lastLoginTime"))
                if (typeof message.lastLoginTime === "number")
                    object.lastLoginTime = options.longs === String ? String(message.lastLoginTime) : message.lastLoginTime;
                else
                    object.lastLoginTime = options.longs === String ? $util.Long.prototype.toString.call(message.lastLoginTime) : options.longs === Number ? new $util.LongBits(message.lastLoginTime.low >>> 0, message.lastLoginTime.high >>> 0).toNumber() : message.lastLoginTime;
            return object;
        };

        /**
         * Converts this UserInfo to JSON.
         * @function toJSON
         * @memberof auth.UserInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for UserInfo
         * @function getTypeUrl
         * @memberof auth.UserInfo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        UserInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/auth.UserInfo";
        };

        return UserInfo;
    })();

    auth.BaseResponse = (function() {

        /**
         * Properties of a BaseResponse.
         * @memberof auth
         * @interface IBaseResponse
         * @property {number|null} [code] BaseResponse code
         * @property {string|null} [message] BaseResponse message
         * @property {number|Long|null} [timestamp] BaseResponse timestamp
         */

        /**
         * Constructs a new BaseResponse.
         * @memberof auth
         * @classdesc Represents a BaseResponse.
         * @implements IBaseResponse
         * @constructor
         * @param {auth.IBaseResponse=} [properties] Properties to set
         */
        function BaseResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BaseResponse code.
         * @member {number} code
         * @memberof auth.BaseResponse
         * @instance
         */
        BaseResponse.prototype.code = 0;

        /**
         * BaseResponse message.
         * @member {string} message
         * @memberof auth.BaseResponse
         * @instance
         */
        BaseResponse.prototype.message = "";

        /**
         * BaseResponse timestamp.
         * @member {number|Long} timestamp
         * @memberof auth.BaseResponse
         * @instance
         */
        BaseResponse.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new BaseResponse instance using the specified properties.
         * @function create
         * @memberof auth.BaseResponse
         * @static
         * @param {auth.IBaseResponse=} [properties] Properties to set
         * @returns {auth.BaseResponse} BaseResponse instance
         */
        BaseResponse.create = function create(properties) {
            return new BaseResponse(properties);
        };

        /**
         * Encodes the specified BaseResponse message. Does not implicitly {@link auth.BaseResponse.verify|verify} messages.
         * @function encode
         * @memberof auth.BaseResponse
         * @static
         * @param {auth.IBaseResponse} message BaseResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BaseResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.message);
            if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.timestamp);
            return writer;
        };

        /**
         * Encodes the specified BaseResponse message, length delimited. Does not implicitly {@link auth.BaseResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof auth.BaseResponse
         * @static
         * @param {auth.IBaseResponse} message BaseResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BaseResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BaseResponse message from the specified reader or buffer.
         * @function decode
         * @memberof auth.BaseResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {auth.BaseResponse} BaseResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BaseResponse.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.auth.BaseResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.code = reader.int32();
                        break;
                    }
                case 2: {
                        message.message = reader.string();
                        break;
                    }
                case 3: {
                        message.timestamp = reader.int64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BaseResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof auth.BaseResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {auth.BaseResponse} BaseResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BaseResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BaseResponse message.
         * @function verify
         * @memberof auth.BaseResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BaseResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isInteger(message.code))
                    return "code: integer expected";
            if (message.message != null && message.hasOwnProperty("message"))
                if (!$util.isString(message.message))
                    return "message: string expected";
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                    return "timestamp: integer|Long expected";
            return null;
        };

        /**
         * Creates a BaseResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof auth.BaseResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {auth.BaseResponse} BaseResponse
         */
        BaseResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.auth.BaseResponse)
                return object;
            let message = new $root.auth.BaseResponse();
            if (object.code != null)
                message.code = object.code | 0;
            if (object.message != null)
                message.message = String(object.message);
            if (object.timestamp != null)
                if ($util.Long)
                    (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = false;
                else if (typeof object.timestamp === "string")
                    message.timestamp = parseInt(object.timestamp, 10);
                else if (typeof object.timestamp === "number")
                    message.timestamp = object.timestamp;
                else if (typeof object.timestamp === "object")
                    message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a BaseResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof auth.BaseResponse
         * @static
         * @param {auth.BaseResponse} message BaseResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BaseResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.code = 0;
                object.message = "";
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.timestamp = options.longs === String ? "0" : 0;
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = message.message;
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (typeof message.timestamp === "number")
                    object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
                else
                    object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber() : message.timestamp;
            return object;
        };

        /**
         * Converts this BaseResponse to JSON.
         * @function toJSON
         * @memberof auth.BaseResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BaseResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for BaseResponse
         * @function getTypeUrl
         * @memberof auth.BaseResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        BaseResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/auth.BaseResponse";
        };

        return BaseResponse;
    })();

    auth.HeartbeatRequest = (function() {

        /**
         * Properties of a HeartbeatRequest.
         * @memberof auth
         * @interface IHeartbeatRequest
         * @property {number|Long|null} [clientTime] HeartbeatRequest clientTime
         */

        /**
         * Constructs a new HeartbeatRequest.
         * @memberof auth
         * @classdesc Represents a HeartbeatRequest.
         * @implements IHeartbeatRequest
         * @constructor
         * @param {auth.IHeartbeatRequest=} [properties] Properties to set
         */
        function HeartbeatRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HeartbeatRequest clientTime.
         * @member {number|Long} clientTime
         * @memberof auth.HeartbeatRequest
         * @instance
         */
        HeartbeatRequest.prototype.clientTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new HeartbeatRequest instance using the specified properties.
         * @function create
         * @memberof auth.HeartbeatRequest
         * @static
         * @param {auth.IHeartbeatRequest=} [properties] Properties to set
         * @returns {auth.HeartbeatRequest} HeartbeatRequest instance
         */
        HeartbeatRequest.create = function create(properties) {
            return new HeartbeatRequest(properties);
        };

        /**
         * Encodes the specified HeartbeatRequest message. Does not implicitly {@link auth.HeartbeatRequest.verify|verify} messages.
         * @function encode
         * @memberof auth.HeartbeatRequest
         * @static
         * @param {auth.IHeartbeatRequest} message HeartbeatRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeartbeatRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.clientTime != null && Object.hasOwnProperty.call(message, "clientTime"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.clientTime);
            return writer;
        };

        /**
         * Encodes the specified HeartbeatRequest message, length delimited. Does not implicitly {@link auth.HeartbeatRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof auth.HeartbeatRequest
         * @static
         * @param {auth.IHeartbeatRequest} message HeartbeatRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeartbeatRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HeartbeatRequest message from the specified reader or buffer.
         * @function decode
         * @memberof auth.HeartbeatRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {auth.HeartbeatRequest} HeartbeatRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeartbeatRequest.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.auth.HeartbeatRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.clientTime = reader.int64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a HeartbeatRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof auth.HeartbeatRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {auth.HeartbeatRequest} HeartbeatRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeartbeatRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HeartbeatRequest message.
         * @function verify
         * @memberof auth.HeartbeatRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HeartbeatRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.clientTime != null && message.hasOwnProperty("clientTime"))
                if (!$util.isInteger(message.clientTime) && !(message.clientTime && $util.isInteger(message.clientTime.low) && $util.isInteger(message.clientTime.high)))
                    return "clientTime: integer|Long expected";
            return null;
        };

        /**
         * Creates a HeartbeatRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof auth.HeartbeatRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {auth.HeartbeatRequest} HeartbeatRequest
         */
        HeartbeatRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.auth.HeartbeatRequest)
                return object;
            let message = new $root.auth.HeartbeatRequest();
            if (object.clientTime != null)
                if ($util.Long)
                    (message.clientTime = $util.Long.fromValue(object.clientTime)).unsigned = false;
                else if (typeof object.clientTime === "string")
                    message.clientTime = parseInt(object.clientTime, 10);
                else if (typeof object.clientTime === "number")
                    message.clientTime = object.clientTime;
                else if (typeof object.clientTime === "object")
                    message.clientTime = new $util.LongBits(object.clientTime.low >>> 0, object.clientTime.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a HeartbeatRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof auth.HeartbeatRequest
         * @static
         * @param {auth.HeartbeatRequest} message HeartbeatRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HeartbeatRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.clientTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.clientTime = options.longs === String ? "0" : 0;
            if (message.clientTime != null && message.hasOwnProperty("clientTime"))
                if (typeof message.clientTime === "number")
                    object.clientTime = options.longs === String ? String(message.clientTime) : message.clientTime;
                else
                    object.clientTime = options.longs === String ? $util.Long.prototype.toString.call(message.clientTime) : options.longs === Number ? new $util.LongBits(message.clientTime.low >>> 0, message.clientTime.high >>> 0).toNumber() : message.clientTime;
            return object;
        };

        /**
         * Converts this HeartbeatRequest to JSON.
         * @function toJSON
         * @memberof auth.HeartbeatRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HeartbeatRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for HeartbeatRequest
         * @function getTypeUrl
         * @memberof auth.HeartbeatRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        HeartbeatRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/auth.HeartbeatRequest";
        };

        return HeartbeatRequest;
    })();

    auth.HeartbeatResponse = (function() {

        /**
         * Properties of a HeartbeatResponse.
         * @memberof auth
         * @interface IHeartbeatResponse
         * @property {number|Long|null} [clientTime] HeartbeatResponse clientTime
         * @property {number|Long|null} [serverTime] HeartbeatResponse serverTime
         */

        /**
         * Constructs a new HeartbeatResponse.
         * @memberof auth
         * @classdesc Represents a HeartbeatResponse.
         * @implements IHeartbeatResponse
         * @constructor
         * @param {auth.IHeartbeatResponse=} [properties] Properties to set
         */
        function HeartbeatResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HeartbeatResponse clientTime.
         * @member {number|Long} clientTime
         * @memberof auth.HeartbeatResponse
         * @instance
         */
        HeartbeatResponse.prototype.clientTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * HeartbeatResponse serverTime.
         * @member {number|Long} serverTime
         * @memberof auth.HeartbeatResponse
         * @instance
         */
        HeartbeatResponse.prototype.serverTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new HeartbeatResponse instance using the specified properties.
         * @function create
         * @memberof auth.HeartbeatResponse
         * @static
         * @param {auth.IHeartbeatResponse=} [properties] Properties to set
         * @returns {auth.HeartbeatResponse} HeartbeatResponse instance
         */
        HeartbeatResponse.create = function create(properties) {
            return new HeartbeatResponse(properties);
        };

        /**
         * Encodes the specified HeartbeatResponse message. Does not implicitly {@link auth.HeartbeatResponse.verify|verify} messages.
         * @function encode
         * @memberof auth.HeartbeatResponse
         * @static
         * @param {auth.IHeartbeatResponse} message HeartbeatResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeartbeatResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.clientTime != null && Object.hasOwnProperty.call(message, "clientTime"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.clientTime);
            if (message.serverTime != null && Object.hasOwnProperty.call(message, "serverTime"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.serverTime);
            return writer;
        };

        /**
         * Encodes the specified HeartbeatResponse message, length delimited. Does not implicitly {@link auth.HeartbeatResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof auth.HeartbeatResponse
         * @static
         * @param {auth.IHeartbeatResponse} message HeartbeatResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeartbeatResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HeartbeatResponse message from the specified reader or buffer.
         * @function decode
         * @memberof auth.HeartbeatResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {auth.HeartbeatResponse} HeartbeatResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeartbeatResponse.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.auth.HeartbeatResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.clientTime = reader.int64();
                        break;
                    }
                case 2: {
                        message.serverTime = reader.int64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a HeartbeatResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof auth.HeartbeatResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {auth.HeartbeatResponse} HeartbeatResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeartbeatResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HeartbeatResponse message.
         * @function verify
         * @memberof auth.HeartbeatResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HeartbeatResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.clientTime != null && message.hasOwnProperty("clientTime"))
                if (!$util.isInteger(message.clientTime) && !(message.clientTime && $util.isInteger(message.clientTime.low) && $util.isInteger(message.clientTime.high)))
                    return "clientTime: integer|Long expected";
            if (message.serverTime != null && message.hasOwnProperty("serverTime"))
                if (!$util.isInteger(message.serverTime) && !(message.serverTime && $util.isInteger(message.serverTime.low) && $util.isInteger(message.serverTime.high)))
                    return "serverTime: integer|Long expected";
            return null;
        };

        /**
         * Creates a HeartbeatResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof auth.HeartbeatResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {auth.HeartbeatResponse} HeartbeatResponse
         */
        HeartbeatResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.auth.HeartbeatResponse)
                return object;
            let message = new $root.auth.HeartbeatResponse();
            if (object.clientTime != null)
                if ($util.Long)
                    (message.clientTime = $util.Long.fromValue(object.clientTime)).unsigned = false;
                else if (typeof object.clientTime === "string")
                    message.clientTime = parseInt(object.clientTime, 10);
                else if (typeof object.clientTime === "number")
                    message.clientTime = object.clientTime;
                else if (typeof object.clientTime === "object")
                    message.clientTime = new $util.LongBits(object.clientTime.low >>> 0, object.clientTime.high >>> 0).toNumber();
            if (object.serverTime != null)
                if ($util.Long)
                    (message.serverTime = $util.Long.fromValue(object.serverTime)).unsigned = false;
                else if (typeof object.serverTime === "string")
                    message.serverTime = parseInt(object.serverTime, 10);
                else if (typeof object.serverTime === "number")
                    message.serverTime = object.serverTime;
                else if (typeof object.serverTime === "object")
                    message.serverTime = new $util.LongBits(object.serverTime.low >>> 0, object.serverTime.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a HeartbeatResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof auth.HeartbeatResponse
         * @static
         * @param {auth.HeartbeatResponse} message HeartbeatResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HeartbeatResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.clientTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.clientTime = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.serverTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.serverTime = options.longs === String ? "0" : 0;
            }
            if (message.clientTime != null && message.hasOwnProperty("clientTime"))
                if (typeof message.clientTime === "number")
                    object.clientTime = options.longs === String ? String(message.clientTime) : message.clientTime;
                else
                    object.clientTime = options.longs === String ? $util.Long.prototype.toString.call(message.clientTime) : options.longs === Number ? new $util.LongBits(message.clientTime.low >>> 0, message.clientTime.high >>> 0).toNumber() : message.clientTime;
            if (message.serverTime != null && message.hasOwnProperty("serverTime"))
                if (typeof message.serverTime === "number")
                    object.serverTime = options.longs === String ? String(message.serverTime) : message.serverTime;
                else
                    object.serverTime = options.longs === String ? $util.Long.prototype.toString.call(message.serverTime) : options.longs === Number ? new $util.LongBits(message.serverTime.low >>> 0, message.serverTime.high >>> 0).toNumber() : message.serverTime;
            return object;
        };

        /**
         * Converts this HeartbeatResponse to JSON.
         * @function toJSON
         * @memberof auth.HeartbeatResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HeartbeatResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for HeartbeatResponse
         * @function getTypeUrl
         * @memberof auth.HeartbeatResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        HeartbeatResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/auth.HeartbeatResponse";
        };

        return HeartbeatResponse;
    })();

    return auth;
})();

export { $root as default };
