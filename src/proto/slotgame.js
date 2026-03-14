/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const slot = $root.slot = (() => {

    /**
     * Namespace slot.
     * @exports slot
     * @namespace
     */
    const slot = {};

    slot.Player = (function() {

        /**
         * Properties of a Player.
         * @memberof slot
         * @interface IPlayer
         * @property {string|null} [playerId] Player playerId
         * @property {string|null} [playerName] Player playerName
         * @property {number|Long|null} [balance] Player balance
         * @property {number|null} [level] Player level
         * @property {number|Long|null} [experience] Player experience
         * @property {number|Long|null} [lastLoginTime] Player lastLoginTime
         * @property {number|Long|null} [createdTime] Player createdTime
         */

        /**
         * Constructs a new Player.
         * @memberof slot
         * @classdesc Represents a Player.
         * @implements IPlayer
         * @constructor
         * @param {slot.IPlayer=} [properties] Properties to set
         */
        function Player(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Player playerId.
         * @member {string} playerId
         * @memberof slot.Player
         * @instance
         */
        Player.prototype.playerId = "";

        /**
         * Player playerName.
         * @member {string} playerName
         * @memberof slot.Player
         * @instance
         */
        Player.prototype.playerName = "";

        /**
         * Player balance.
         * @member {number|Long} balance
         * @memberof slot.Player
         * @instance
         */
        Player.prototype.balance = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Player level.
         * @member {number} level
         * @memberof slot.Player
         * @instance
         */
        Player.prototype.level = 0;

        /**
         * Player experience.
         * @member {number|Long} experience
         * @memberof slot.Player
         * @instance
         */
        Player.prototype.experience = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Player lastLoginTime.
         * @member {number|Long} lastLoginTime
         * @memberof slot.Player
         * @instance
         */
        Player.prototype.lastLoginTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Player createdTime.
         * @member {number|Long} createdTime
         * @memberof slot.Player
         * @instance
         */
        Player.prototype.createdTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new Player instance using the specified properties.
         * @function create
         * @memberof slot.Player
         * @static
         * @param {slot.IPlayer=} [properties] Properties to set
         * @returns {slot.Player} Player instance
         */
        Player.create = function create(properties) {
            return new Player(properties);
        };

        /**
         * Encodes the specified Player message. Does not implicitly {@link slot.Player.verify|verify} messages.
         * @function encode
         * @memberof slot.Player
         * @static
         * @param {slot.IPlayer} message Player message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Player.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.playerId != null && Object.hasOwnProperty.call(message, "playerId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.playerId);
            if (message.playerName != null && Object.hasOwnProperty.call(message, "playerName"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.playerName);
            if (message.balance != null && Object.hasOwnProperty.call(message, "balance"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.balance);
            if (message.level != null && Object.hasOwnProperty.call(message, "level"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.level);
            if (message.experience != null && Object.hasOwnProperty.call(message, "experience"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.experience);
            if (message.lastLoginTime != null && Object.hasOwnProperty.call(message, "lastLoginTime"))
                writer.uint32(/* id 6, wireType 0 =*/48).int64(message.lastLoginTime);
            if (message.createdTime != null && Object.hasOwnProperty.call(message, "createdTime"))
                writer.uint32(/* id 7, wireType 0 =*/56).int64(message.createdTime);
            return writer;
        };

        /**
         * Encodes the specified Player message, length delimited. Does not implicitly {@link slot.Player.verify|verify} messages.
         * @function encodeDelimited
         * @memberof slot.Player
         * @static
         * @param {slot.IPlayer} message Player message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Player.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Player message from the specified reader or buffer.
         * @function decode
         * @memberof slot.Player
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {slot.Player} Player
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Player.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.slot.Player();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.playerId = reader.string();
                        break;
                    }
                case 2: {
                        message.playerName = reader.string();
                        break;
                    }
                case 3: {
                        message.balance = reader.int64();
                        break;
                    }
                case 4: {
                        message.level = reader.int32();
                        break;
                    }
                case 5: {
                        message.experience = reader.int64();
                        break;
                    }
                case 6: {
                        message.lastLoginTime = reader.int64();
                        break;
                    }
                case 7: {
                        message.createdTime = reader.int64();
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
         * Decodes a Player message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof slot.Player
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {slot.Player} Player
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Player.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Player message.
         * @function verify
         * @memberof slot.Player
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Player.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                if (!$util.isString(message.playerId))
                    return "playerId: string expected";
            if (message.playerName != null && message.hasOwnProperty("playerName"))
                if (!$util.isString(message.playerName))
                    return "playerName: string expected";
            if (message.balance != null && message.hasOwnProperty("balance"))
                if (!$util.isInteger(message.balance) && !(message.balance && $util.isInteger(message.balance.low) && $util.isInteger(message.balance.high)))
                    return "balance: integer|Long expected";
            if (message.level != null && message.hasOwnProperty("level"))
                if (!$util.isInteger(message.level))
                    return "level: integer expected";
            if (message.experience != null && message.hasOwnProperty("experience"))
                if (!$util.isInteger(message.experience) && !(message.experience && $util.isInteger(message.experience.low) && $util.isInteger(message.experience.high)))
                    return "experience: integer|Long expected";
            if (message.lastLoginTime != null && message.hasOwnProperty("lastLoginTime"))
                if (!$util.isInteger(message.lastLoginTime) && !(message.lastLoginTime && $util.isInteger(message.lastLoginTime.low) && $util.isInteger(message.lastLoginTime.high)))
                    return "lastLoginTime: integer|Long expected";
            if (message.createdTime != null && message.hasOwnProperty("createdTime"))
                if (!$util.isInteger(message.createdTime) && !(message.createdTime && $util.isInteger(message.createdTime.low) && $util.isInteger(message.createdTime.high)))
                    return "createdTime: integer|Long expected";
            return null;
        };

        /**
         * Creates a Player message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof slot.Player
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {slot.Player} Player
         */
        Player.fromObject = function fromObject(object) {
            if (object instanceof $root.slot.Player)
                return object;
            let message = new $root.slot.Player();
            if (object.playerId != null)
                message.playerId = String(object.playerId);
            if (object.playerName != null)
                message.playerName = String(object.playerName);
            if (object.balance != null)
                if ($util.Long)
                    (message.balance = $util.Long.fromValue(object.balance)).unsigned = false;
                else if (typeof object.balance === "string")
                    message.balance = parseInt(object.balance, 10);
                else if (typeof object.balance === "number")
                    message.balance = object.balance;
                else if (typeof object.balance === "object")
                    message.balance = new $util.LongBits(object.balance.low >>> 0, object.balance.high >>> 0).toNumber();
            if (object.level != null)
                message.level = object.level | 0;
            if (object.experience != null)
                if ($util.Long)
                    (message.experience = $util.Long.fromValue(object.experience)).unsigned = false;
                else if (typeof object.experience === "string")
                    message.experience = parseInt(object.experience, 10);
                else if (typeof object.experience === "number")
                    message.experience = object.experience;
                else if (typeof object.experience === "object")
                    message.experience = new $util.LongBits(object.experience.low >>> 0, object.experience.high >>> 0).toNumber();
            if (object.lastLoginTime != null)
                if ($util.Long)
                    (message.lastLoginTime = $util.Long.fromValue(object.lastLoginTime)).unsigned = false;
                else if (typeof object.lastLoginTime === "string")
                    message.lastLoginTime = parseInt(object.lastLoginTime, 10);
                else if (typeof object.lastLoginTime === "number")
                    message.lastLoginTime = object.lastLoginTime;
                else if (typeof object.lastLoginTime === "object")
                    message.lastLoginTime = new $util.LongBits(object.lastLoginTime.low >>> 0, object.lastLoginTime.high >>> 0).toNumber();
            if (object.createdTime != null)
                if ($util.Long)
                    (message.createdTime = $util.Long.fromValue(object.createdTime)).unsigned = false;
                else if (typeof object.createdTime === "string")
                    message.createdTime = parseInt(object.createdTime, 10);
                else if (typeof object.createdTime === "number")
                    message.createdTime = object.createdTime;
                else if (typeof object.createdTime === "object")
                    message.createdTime = new $util.LongBits(object.createdTime.low >>> 0, object.createdTime.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a Player message. Also converts values to other types if specified.
         * @function toObject
         * @memberof slot.Player
         * @static
         * @param {slot.Player} message Player
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Player.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.playerId = "";
                object.playerName = "";
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.balance = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.balance = options.longs === String ? "0" : 0;
                object.level = 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.experience = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.experience = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.lastLoginTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.lastLoginTime = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.createdTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.createdTime = options.longs === String ? "0" : 0;
            }
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                object.playerId = message.playerId;
            if (message.playerName != null && message.hasOwnProperty("playerName"))
                object.playerName = message.playerName;
            if (message.balance != null && message.hasOwnProperty("balance"))
                if (typeof message.balance === "number")
                    object.balance = options.longs === String ? String(message.balance) : message.balance;
                else
                    object.balance = options.longs === String ? $util.Long.prototype.toString.call(message.balance) : options.longs === Number ? new $util.LongBits(message.balance.low >>> 0, message.balance.high >>> 0).toNumber() : message.balance;
            if (message.level != null && message.hasOwnProperty("level"))
                object.level = message.level;
            if (message.experience != null && message.hasOwnProperty("experience"))
                if (typeof message.experience === "number")
                    object.experience = options.longs === String ? String(message.experience) : message.experience;
                else
                    object.experience = options.longs === String ? $util.Long.prototype.toString.call(message.experience) : options.longs === Number ? new $util.LongBits(message.experience.low >>> 0, message.experience.high >>> 0).toNumber() : message.experience;
            if (message.lastLoginTime != null && message.hasOwnProperty("lastLoginTime"))
                if (typeof message.lastLoginTime === "number")
                    object.lastLoginTime = options.longs === String ? String(message.lastLoginTime) : message.lastLoginTime;
                else
                    object.lastLoginTime = options.longs === String ? $util.Long.prototype.toString.call(message.lastLoginTime) : options.longs === Number ? new $util.LongBits(message.lastLoginTime.low >>> 0, message.lastLoginTime.high >>> 0).toNumber() : message.lastLoginTime;
            if (message.createdTime != null && message.hasOwnProperty("createdTime"))
                if (typeof message.createdTime === "number")
                    object.createdTime = options.longs === String ? String(message.createdTime) : message.createdTime;
                else
                    object.createdTime = options.longs === String ? $util.Long.prototype.toString.call(message.createdTime) : options.longs === Number ? new $util.LongBits(message.createdTime.low >>> 0, message.createdTime.high >>> 0).toNumber() : message.createdTime;
            return object;
        };

        /**
         * Converts this Player to JSON.
         * @function toJSON
         * @memberof slot.Player
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Player.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Player
         * @function getTypeUrl
         * @memberof slot.Player
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Player.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/slot.Player";
        };

        return Player;
    })();

    slot.Symbol = (function() {

        /**
         * Properties of a Symbol.
         * @memberof slot
         * @interface ISymbol
         * @property {string|null} [symbolId] Symbol symbolId
         * @property {string|null} [name] Symbol name
         * @property {number|null} [weight] Symbol weight
         * @property {number|null} [multiplier] Symbol multiplier
         * @property {boolean|null} [isWild] Symbol isWild
         * @property {boolean|null} [isScatter] Symbol isScatter
         */

        /**
         * Constructs a new Symbol.
         * @memberof slot
         * @classdesc Represents a Symbol.
         * @implements ISymbol
         * @constructor
         * @param {slot.ISymbol=} [properties] Properties to set
         */
        function Symbol(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Symbol symbolId.
         * @member {string} symbolId
         * @memberof slot.Symbol
         * @instance
         */
        Symbol.prototype.symbolId = "";

        /**
         * Symbol name.
         * @member {string} name
         * @memberof slot.Symbol
         * @instance
         */
        Symbol.prototype.name = "";

        /**
         * Symbol weight.
         * @member {number} weight
         * @memberof slot.Symbol
         * @instance
         */
        Symbol.prototype.weight = 0;

        /**
         * Symbol multiplier.
         * @member {number} multiplier
         * @memberof slot.Symbol
         * @instance
         */
        Symbol.prototype.multiplier = 0;

        /**
         * Symbol isWild.
         * @member {boolean} isWild
         * @memberof slot.Symbol
         * @instance
         */
        Symbol.prototype.isWild = false;

        /**
         * Symbol isScatter.
         * @member {boolean} isScatter
         * @memberof slot.Symbol
         * @instance
         */
        Symbol.prototype.isScatter = false;

        /**
         * Creates a new Symbol instance using the specified properties.
         * @function create
         * @memberof slot.Symbol
         * @static
         * @param {slot.ISymbol=} [properties] Properties to set
         * @returns {slot.Symbol} Symbol instance
         */
        Symbol.create = function create(properties) {
            return new Symbol(properties);
        };

        /**
         * Encodes the specified Symbol message. Does not implicitly {@link slot.Symbol.verify|verify} messages.
         * @function encode
         * @memberof slot.Symbol
         * @static
         * @param {slot.ISymbol} message Symbol message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Symbol.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.symbolId != null && Object.hasOwnProperty.call(message, "symbolId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.symbolId);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.weight != null && Object.hasOwnProperty.call(message, "weight"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.weight);
            if (message.multiplier != null && Object.hasOwnProperty.call(message, "multiplier"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.multiplier);
            if (message.isWild != null && Object.hasOwnProperty.call(message, "isWild"))
                writer.uint32(/* id 5, wireType 0 =*/40).bool(message.isWild);
            if (message.isScatter != null && Object.hasOwnProperty.call(message, "isScatter"))
                writer.uint32(/* id 6, wireType 0 =*/48).bool(message.isScatter);
            return writer;
        };

        /**
         * Encodes the specified Symbol message, length delimited. Does not implicitly {@link slot.Symbol.verify|verify} messages.
         * @function encodeDelimited
         * @memberof slot.Symbol
         * @static
         * @param {slot.ISymbol} message Symbol message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Symbol.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Symbol message from the specified reader or buffer.
         * @function decode
         * @memberof slot.Symbol
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {slot.Symbol} Symbol
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Symbol.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.slot.Symbol();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.symbolId = reader.string();
                        break;
                    }
                case 2: {
                        message.name = reader.string();
                        break;
                    }
                case 3: {
                        message.weight = reader.int32();
                        break;
                    }
                case 4: {
                        message.multiplier = reader.int32();
                        break;
                    }
                case 5: {
                        message.isWild = reader.bool();
                        break;
                    }
                case 6: {
                        message.isScatter = reader.bool();
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
         * Decodes a Symbol message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof slot.Symbol
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {slot.Symbol} Symbol
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Symbol.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Symbol message.
         * @function verify
         * @memberof slot.Symbol
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Symbol.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.symbolId != null && message.hasOwnProperty("symbolId"))
                if (!$util.isString(message.symbolId))
                    return "symbolId: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.weight != null && message.hasOwnProperty("weight"))
                if (!$util.isInteger(message.weight))
                    return "weight: integer expected";
            if (message.multiplier != null && message.hasOwnProperty("multiplier"))
                if (!$util.isInteger(message.multiplier))
                    return "multiplier: integer expected";
            if (message.isWild != null && message.hasOwnProperty("isWild"))
                if (typeof message.isWild !== "boolean")
                    return "isWild: boolean expected";
            if (message.isScatter != null && message.hasOwnProperty("isScatter"))
                if (typeof message.isScatter !== "boolean")
                    return "isScatter: boolean expected";
            return null;
        };

        /**
         * Creates a Symbol message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof slot.Symbol
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {slot.Symbol} Symbol
         */
        Symbol.fromObject = function fromObject(object) {
            if (object instanceof $root.slot.Symbol)
                return object;
            let message = new $root.slot.Symbol();
            if (object.symbolId != null)
                message.symbolId = String(object.symbolId);
            if (object.name != null)
                message.name = String(object.name);
            if (object.weight != null)
                message.weight = object.weight | 0;
            if (object.multiplier != null)
                message.multiplier = object.multiplier | 0;
            if (object.isWild != null)
                message.isWild = Boolean(object.isWild);
            if (object.isScatter != null)
                message.isScatter = Boolean(object.isScatter);
            return message;
        };

        /**
         * Creates a plain object from a Symbol message. Also converts values to other types if specified.
         * @function toObject
         * @memberof slot.Symbol
         * @static
         * @param {slot.Symbol} message Symbol
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Symbol.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.symbolId = "";
                object.name = "";
                object.weight = 0;
                object.multiplier = 0;
                object.isWild = false;
                object.isScatter = false;
            }
            if (message.symbolId != null && message.hasOwnProperty("symbolId"))
                object.symbolId = message.symbolId;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.weight != null && message.hasOwnProperty("weight"))
                object.weight = message.weight;
            if (message.multiplier != null && message.hasOwnProperty("multiplier"))
                object.multiplier = message.multiplier;
            if (message.isWild != null && message.hasOwnProperty("isWild"))
                object.isWild = message.isWild;
            if (message.isScatter != null && message.hasOwnProperty("isScatter"))
                object.isScatter = message.isScatter;
            return object;
        };

        /**
         * Converts this Symbol to JSON.
         * @function toJSON
         * @memberof slot.Symbol
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Symbol.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Symbol
         * @function getTypeUrl
         * @memberof slot.Symbol
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Symbol.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/slot.Symbol";
        };

        return Symbol;
    })();

    slot.SpinResult = (function() {

        /**
         * Properties of a SpinResult.
         * @memberof slot
         * @interface ISpinResult
         * @property {Array.<string>|null} [reels] SpinResult reels
         * @property {number|Long|null} [winAmount] SpinResult winAmount
         * @property {Array.<slot.IWinLine>|null} [winLines] SpinResult winLines
         * @property {boolean|null} [isBonus] SpinResult isBonus
         * @property {number|Long|null} [newBalance] SpinResult newBalance
         */

        /**
         * Constructs a new SpinResult.
         * @memberof slot
         * @classdesc Represents a SpinResult.
         * @implements ISpinResult
         * @constructor
         * @param {slot.ISpinResult=} [properties] Properties to set
         */
        function SpinResult(properties) {
            this.reels = [];
            this.winLines = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SpinResult reels.
         * @member {Array.<string>} reels
         * @memberof slot.SpinResult
         * @instance
         */
        SpinResult.prototype.reels = $util.emptyArray;

        /**
         * SpinResult winAmount.
         * @member {number|Long} winAmount
         * @memberof slot.SpinResult
         * @instance
         */
        SpinResult.prototype.winAmount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * SpinResult winLines.
         * @member {Array.<slot.IWinLine>} winLines
         * @memberof slot.SpinResult
         * @instance
         */
        SpinResult.prototype.winLines = $util.emptyArray;

        /**
         * SpinResult isBonus.
         * @member {boolean} isBonus
         * @memberof slot.SpinResult
         * @instance
         */
        SpinResult.prototype.isBonus = false;

        /**
         * SpinResult newBalance.
         * @member {number|Long} newBalance
         * @memberof slot.SpinResult
         * @instance
         */
        SpinResult.prototype.newBalance = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new SpinResult instance using the specified properties.
         * @function create
         * @memberof slot.SpinResult
         * @static
         * @param {slot.ISpinResult=} [properties] Properties to set
         * @returns {slot.SpinResult} SpinResult instance
         */
        SpinResult.create = function create(properties) {
            return new SpinResult(properties);
        };

        /**
         * Encodes the specified SpinResult message. Does not implicitly {@link slot.SpinResult.verify|verify} messages.
         * @function encode
         * @memberof slot.SpinResult
         * @static
         * @param {slot.ISpinResult} message SpinResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SpinResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.reels != null && message.reels.length)
                for (let i = 0; i < message.reels.length; ++i)
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.reels[i]);
            if (message.winAmount != null && Object.hasOwnProperty.call(message, "winAmount"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.winAmount);
            if (message.winLines != null && message.winLines.length)
                for (let i = 0; i < message.winLines.length; ++i)
                    $root.slot.WinLine.encode(message.winLines[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.isBonus != null && Object.hasOwnProperty.call(message, "isBonus"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.isBonus);
            if (message.newBalance != null && Object.hasOwnProperty.call(message, "newBalance"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.newBalance);
            return writer;
        };

        /**
         * Encodes the specified SpinResult message, length delimited. Does not implicitly {@link slot.SpinResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof slot.SpinResult
         * @static
         * @param {slot.ISpinResult} message SpinResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SpinResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SpinResult message from the specified reader or buffer.
         * @function decode
         * @memberof slot.SpinResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {slot.SpinResult} SpinResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SpinResult.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.slot.SpinResult();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.reels && message.reels.length))
                            message.reels = [];
                        message.reels.push(reader.string());
                        break;
                    }
                case 2: {
                        message.winAmount = reader.int64();
                        break;
                    }
                case 3: {
                        if (!(message.winLines && message.winLines.length))
                            message.winLines = [];
                        message.winLines.push($root.slot.WinLine.decode(reader, reader.uint32()));
                        break;
                    }
                case 4: {
                        message.isBonus = reader.bool();
                        break;
                    }
                case 5: {
                        message.newBalance = reader.int64();
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
         * Decodes a SpinResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof slot.SpinResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {slot.SpinResult} SpinResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SpinResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SpinResult message.
         * @function verify
         * @memberof slot.SpinResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SpinResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.reels != null && message.hasOwnProperty("reels")) {
                if (!Array.isArray(message.reels))
                    return "reels: array expected";
                for (let i = 0; i < message.reels.length; ++i)
                    if (!$util.isString(message.reels[i]))
                        return "reels: string[] expected";
            }
            if (message.winAmount != null && message.hasOwnProperty("winAmount"))
                if (!$util.isInteger(message.winAmount) && !(message.winAmount && $util.isInteger(message.winAmount.low) && $util.isInteger(message.winAmount.high)))
                    return "winAmount: integer|Long expected";
            if (message.winLines != null && message.hasOwnProperty("winLines")) {
                if (!Array.isArray(message.winLines))
                    return "winLines: array expected";
                for (let i = 0; i < message.winLines.length; ++i) {
                    let error = $root.slot.WinLine.verify(message.winLines[i]);
                    if (error)
                        return "winLines." + error;
                }
            }
            if (message.isBonus != null && message.hasOwnProperty("isBonus"))
                if (typeof message.isBonus !== "boolean")
                    return "isBonus: boolean expected";
            if (message.newBalance != null && message.hasOwnProperty("newBalance"))
                if (!$util.isInteger(message.newBalance) && !(message.newBalance && $util.isInteger(message.newBalance.low) && $util.isInteger(message.newBalance.high)))
                    return "newBalance: integer|Long expected";
            return null;
        };

        /**
         * Creates a SpinResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof slot.SpinResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {slot.SpinResult} SpinResult
         */
        SpinResult.fromObject = function fromObject(object) {
            if (object instanceof $root.slot.SpinResult)
                return object;
            let message = new $root.slot.SpinResult();
            if (object.reels) {
                if (!Array.isArray(object.reels))
                    throw TypeError(".slot.SpinResult.reels: array expected");
                message.reels = [];
                for (let i = 0; i < object.reels.length; ++i)
                    message.reels[i] = String(object.reels[i]);
            }
            if (object.winAmount != null)
                if ($util.Long)
                    (message.winAmount = $util.Long.fromValue(object.winAmount)).unsigned = false;
                else if (typeof object.winAmount === "string")
                    message.winAmount = parseInt(object.winAmount, 10);
                else if (typeof object.winAmount === "number")
                    message.winAmount = object.winAmount;
                else if (typeof object.winAmount === "object")
                    message.winAmount = new $util.LongBits(object.winAmount.low >>> 0, object.winAmount.high >>> 0).toNumber();
            if (object.winLines) {
                if (!Array.isArray(object.winLines))
                    throw TypeError(".slot.SpinResult.winLines: array expected");
                message.winLines = [];
                for (let i = 0; i < object.winLines.length; ++i) {
                    if (typeof object.winLines[i] !== "object")
                        throw TypeError(".slot.SpinResult.winLines: object expected");
                    message.winLines[i] = $root.slot.WinLine.fromObject(object.winLines[i]);
                }
            }
            if (object.isBonus != null)
                message.isBonus = Boolean(object.isBonus);
            if (object.newBalance != null)
                if ($util.Long)
                    (message.newBalance = $util.Long.fromValue(object.newBalance)).unsigned = false;
                else if (typeof object.newBalance === "string")
                    message.newBalance = parseInt(object.newBalance, 10);
                else if (typeof object.newBalance === "number")
                    message.newBalance = object.newBalance;
                else if (typeof object.newBalance === "object")
                    message.newBalance = new $util.LongBits(object.newBalance.low >>> 0, object.newBalance.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a SpinResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof slot.SpinResult
         * @static
         * @param {slot.SpinResult} message SpinResult
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SpinResult.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults) {
                object.reels = [];
                object.winLines = [];
            }
            if (options.defaults) {
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.winAmount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.winAmount = options.longs === String ? "0" : 0;
                object.isBonus = false;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.newBalance = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.newBalance = options.longs === String ? "0" : 0;
            }
            if (message.reels && message.reels.length) {
                object.reels = [];
                for (let j = 0; j < message.reels.length; ++j)
                    object.reels[j] = message.reels[j];
            }
            if (message.winAmount != null && message.hasOwnProperty("winAmount"))
                if (typeof message.winAmount === "number")
                    object.winAmount = options.longs === String ? String(message.winAmount) : message.winAmount;
                else
                    object.winAmount = options.longs === String ? $util.Long.prototype.toString.call(message.winAmount) : options.longs === Number ? new $util.LongBits(message.winAmount.low >>> 0, message.winAmount.high >>> 0).toNumber() : message.winAmount;
            if (message.winLines && message.winLines.length) {
                object.winLines = [];
                for (let j = 0; j < message.winLines.length; ++j)
                    object.winLines[j] = $root.slot.WinLine.toObject(message.winLines[j], options);
            }
            if (message.isBonus != null && message.hasOwnProperty("isBonus"))
                object.isBonus = message.isBonus;
            if (message.newBalance != null && message.hasOwnProperty("newBalance"))
                if (typeof message.newBalance === "number")
                    object.newBalance = options.longs === String ? String(message.newBalance) : message.newBalance;
                else
                    object.newBalance = options.longs === String ? $util.Long.prototype.toString.call(message.newBalance) : options.longs === Number ? new $util.LongBits(message.newBalance.low >>> 0, message.newBalance.high >>> 0).toNumber() : message.newBalance;
            return object;
        };

        /**
         * Converts this SpinResult to JSON.
         * @function toJSON
         * @memberof slot.SpinResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SpinResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SpinResult
         * @function getTypeUrl
         * @memberof slot.SpinResult
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SpinResult.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/slot.SpinResult";
        };

        return SpinResult;
    })();

    slot.WinLine = (function() {

        /**
         * Properties of a WinLine.
         * @memberof slot
         * @interface IWinLine
         * @property {number|null} [lineIndex] WinLine lineIndex
         * @property {string|null} [symbol] WinLine symbol
         * @property {number|null} [count] WinLine count
         * @property {number|Long|null} [amount] WinLine amount
         */

        /**
         * Constructs a new WinLine.
         * @memberof slot
         * @classdesc Represents a WinLine.
         * @implements IWinLine
         * @constructor
         * @param {slot.IWinLine=} [properties] Properties to set
         */
        function WinLine(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WinLine lineIndex.
         * @member {number} lineIndex
         * @memberof slot.WinLine
         * @instance
         */
        WinLine.prototype.lineIndex = 0;

        /**
         * WinLine symbol.
         * @member {string} symbol
         * @memberof slot.WinLine
         * @instance
         */
        WinLine.prototype.symbol = "";

        /**
         * WinLine count.
         * @member {number} count
         * @memberof slot.WinLine
         * @instance
         */
        WinLine.prototype.count = 0;

        /**
         * WinLine amount.
         * @member {number|Long} amount
         * @memberof slot.WinLine
         * @instance
         */
        WinLine.prototype.amount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new WinLine instance using the specified properties.
         * @function create
         * @memberof slot.WinLine
         * @static
         * @param {slot.IWinLine=} [properties] Properties to set
         * @returns {slot.WinLine} WinLine instance
         */
        WinLine.create = function create(properties) {
            return new WinLine(properties);
        };

        /**
         * Encodes the specified WinLine message. Does not implicitly {@link slot.WinLine.verify|verify} messages.
         * @function encode
         * @memberof slot.WinLine
         * @static
         * @param {slot.IWinLine} message WinLine message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WinLine.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.lineIndex != null && Object.hasOwnProperty.call(message, "lineIndex"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.lineIndex);
            if (message.symbol != null && Object.hasOwnProperty.call(message, "symbol"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.symbol);
            if (message.count != null && Object.hasOwnProperty.call(message, "count"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.count);
            if (message.amount != null && Object.hasOwnProperty.call(message, "amount"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.amount);
            return writer;
        };

        /**
         * Encodes the specified WinLine message, length delimited. Does not implicitly {@link slot.WinLine.verify|verify} messages.
         * @function encodeDelimited
         * @memberof slot.WinLine
         * @static
         * @param {slot.IWinLine} message WinLine message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WinLine.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WinLine message from the specified reader or buffer.
         * @function decode
         * @memberof slot.WinLine
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {slot.WinLine} WinLine
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WinLine.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.slot.WinLine();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.lineIndex = reader.int32();
                        break;
                    }
                case 2: {
                        message.symbol = reader.string();
                        break;
                    }
                case 3: {
                        message.count = reader.int32();
                        break;
                    }
                case 4: {
                        message.amount = reader.int64();
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
         * Decodes a WinLine message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof slot.WinLine
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {slot.WinLine} WinLine
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WinLine.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WinLine message.
         * @function verify
         * @memberof slot.WinLine
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WinLine.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.lineIndex != null && message.hasOwnProperty("lineIndex"))
                if (!$util.isInteger(message.lineIndex))
                    return "lineIndex: integer expected";
            if (message.symbol != null && message.hasOwnProperty("symbol"))
                if (!$util.isString(message.symbol))
                    return "symbol: string expected";
            if (message.count != null && message.hasOwnProperty("count"))
                if (!$util.isInteger(message.count))
                    return "count: integer expected";
            if (message.amount != null && message.hasOwnProperty("amount"))
                if (!$util.isInteger(message.amount) && !(message.amount && $util.isInteger(message.amount.low) && $util.isInteger(message.amount.high)))
                    return "amount: integer|Long expected";
            return null;
        };

        /**
         * Creates a WinLine message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof slot.WinLine
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {slot.WinLine} WinLine
         */
        WinLine.fromObject = function fromObject(object) {
            if (object instanceof $root.slot.WinLine)
                return object;
            let message = new $root.slot.WinLine();
            if (object.lineIndex != null)
                message.lineIndex = object.lineIndex | 0;
            if (object.symbol != null)
                message.symbol = String(object.symbol);
            if (object.count != null)
                message.count = object.count | 0;
            if (object.amount != null)
                if ($util.Long)
                    (message.amount = $util.Long.fromValue(object.amount)).unsigned = false;
                else if (typeof object.amount === "string")
                    message.amount = parseInt(object.amount, 10);
                else if (typeof object.amount === "number")
                    message.amount = object.amount;
                else if (typeof object.amount === "object")
                    message.amount = new $util.LongBits(object.amount.low >>> 0, object.amount.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a WinLine message. Also converts values to other types if specified.
         * @function toObject
         * @memberof slot.WinLine
         * @static
         * @param {slot.WinLine} message WinLine
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WinLine.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.lineIndex = 0;
                object.symbol = "";
                object.count = 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.amount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.amount = options.longs === String ? "0" : 0;
            }
            if (message.lineIndex != null && message.hasOwnProperty("lineIndex"))
                object.lineIndex = message.lineIndex;
            if (message.symbol != null && message.hasOwnProperty("symbol"))
                object.symbol = message.symbol;
            if (message.count != null && message.hasOwnProperty("count"))
                object.count = message.count;
            if (message.amount != null && message.hasOwnProperty("amount"))
                if (typeof message.amount === "number")
                    object.amount = options.longs === String ? String(message.amount) : message.amount;
                else
                    object.amount = options.longs === String ? $util.Long.prototype.toString.call(message.amount) : options.longs === Number ? new $util.LongBits(message.amount.low >>> 0, message.amount.high >>> 0).toNumber() : message.amount;
            return object;
        };

        /**
         * Converts this WinLine to JSON.
         * @function toJSON
         * @memberof slot.WinLine
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WinLine.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for WinLine
         * @function getTypeUrl
         * @memberof slot.WinLine
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        WinLine.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/slot.WinLine";
        };

        return WinLine;
    })();

    slot.Room = (function() {

        /**
         * Properties of a Room.
         * @memberof slot
         * @interface IRoom
         * @property {string|null} [roomId] Room roomId
         * @property {string|null} [roomName] Room roomName
         * @property {number|null} [maxPlayers] Room maxPlayers
         * @property {number|null} [currentPlayers] Room currentPlayers
         * @property {number|Long|null} [minBet] Room minBet
         * @property {number|Long|null} [maxBet] Room maxBet
         * @property {string|null} [status] Room status
         */

        /**
         * Constructs a new Room.
         * @memberof slot
         * @classdesc Represents a Room.
         * @implements IRoom
         * @constructor
         * @param {slot.IRoom=} [properties] Properties to set
         */
        function Room(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Room roomId.
         * @member {string} roomId
         * @memberof slot.Room
         * @instance
         */
        Room.prototype.roomId = "";

        /**
         * Room roomName.
         * @member {string} roomName
         * @memberof slot.Room
         * @instance
         */
        Room.prototype.roomName = "";

        /**
         * Room maxPlayers.
         * @member {number} maxPlayers
         * @memberof slot.Room
         * @instance
         */
        Room.prototype.maxPlayers = 0;

        /**
         * Room currentPlayers.
         * @member {number} currentPlayers
         * @memberof slot.Room
         * @instance
         */
        Room.prototype.currentPlayers = 0;

        /**
         * Room minBet.
         * @member {number|Long} minBet
         * @memberof slot.Room
         * @instance
         */
        Room.prototype.minBet = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Room maxBet.
         * @member {number|Long} maxBet
         * @memberof slot.Room
         * @instance
         */
        Room.prototype.maxBet = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Room status.
         * @member {string} status
         * @memberof slot.Room
         * @instance
         */
        Room.prototype.status = "";

        /**
         * Creates a new Room instance using the specified properties.
         * @function create
         * @memberof slot.Room
         * @static
         * @param {slot.IRoom=} [properties] Properties to set
         * @returns {slot.Room} Room instance
         */
        Room.create = function create(properties) {
            return new Room(properties);
        };

        /**
         * Encodes the specified Room message. Does not implicitly {@link slot.Room.verify|verify} messages.
         * @function encode
         * @memberof slot.Room
         * @static
         * @param {slot.IRoom} message Room message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Room.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.roomId != null && Object.hasOwnProperty.call(message, "roomId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.roomId);
            if (message.roomName != null && Object.hasOwnProperty.call(message, "roomName"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.roomName);
            if (message.maxPlayers != null && Object.hasOwnProperty.call(message, "maxPlayers"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.maxPlayers);
            if (message.currentPlayers != null && Object.hasOwnProperty.call(message, "currentPlayers"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.currentPlayers);
            if (message.minBet != null && Object.hasOwnProperty.call(message, "minBet"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.minBet);
            if (message.maxBet != null && Object.hasOwnProperty.call(message, "maxBet"))
                writer.uint32(/* id 6, wireType 0 =*/48).int64(message.maxBet);
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.status);
            return writer;
        };

        /**
         * Encodes the specified Room message, length delimited. Does not implicitly {@link slot.Room.verify|verify} messages.
         * @function encodeDelimited
         * @memberof slot.Room
         * @static
         * @param {slot.IRoom} message Room message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Room.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Room message from the specified reader or buffer.
         * @function decode
         * @memberof slot.Room
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {slot.Room} Room
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Room.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.slot.Room();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.roomId = reader.string();
                        break;
                    }
                case 2: {
                        message.roomName = reader.string();
                        break;
                    }
                case 3: {
                        message.maxPlayers = reader.int32();
                        break;
                    }
                case 4: {
                        message.currentPlayers = reader.int32();
                        break;
                    }
                case 5: {
                        message.minBet = reader.int64();
                        break;
                    }
                case 6: {
                        message.maxBet = reader.int64();
                        break;
                    }
                case 7: {
                        message.status = reader.string();
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
         * Decodes a Room message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof slot.Room
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {slot.Room} Room
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Room.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Room message.
         * @function verify
         * @memberof slot.Room
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Room.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                if (!$util.isString(message.roomId))
                    return "roomId: string expected";
            if (message.roomName != null && message.hasOwnProperty("roomName"))
                if (!$util.isString(message.roomName))
                    return "roomName: string expected";
            if (message.maxPlayers != null && message.hasOwnProperty("maxPlayers"))
                if (!$util.isInteger(message.maxPlayers))
                    return "maxPlayers: integer expected";
            if (message.currentPlayers != null && message.hasOwnProperty("currentPlayers"))
                if (!$util.isInteger(message.currentPlayers))
                    return "currentPlayers: integer expected";
            if (message.minBet != null && message.hasOwnProperty("minBet"))
                if (!$util.isInteger(message.minBet) && !(message.minBet && $util.isInteger(message.minBet.low) && $util.isInteger(message.minBet.high)))
                    return "minBet: integer|Long expected";
            if (message.maxBet != null && message.hasOwnProperty("maxBet"))
                if (!$util.isInteger(message.maxBet) && !(message.maxBet && $util.isInteger(message.maxBet.low) && $util.isInteger(message.maxBet.high)))
                    return "maxBet: integer|Long expected";
            if (message.status != null && message.hasOwnProperty("status"))
                if (!$util.isString(message.status))
                    return "status: string expected";
            return null;
        };

        /**
         * Creates a Room message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof slot.Room
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {slot.Room} Room
         */
        Room.fromObject = function fromObject(object) {
            if (object instanceof $root.slot.Room)
                return object;
            let message = new $root.slot.Room();
            if (object.roomId != null)
                message.roomId = String(object.roomId);
            if (object.roomName != null)
                message.roomName = String(object.roomName);
            if (object.maxPlayers != null)
                message.maxPlayers = object.maxPlayers | 0;
            if (object.currentPlayers != null)
                message.currentPlayers = object.currentPlayers | 0;
            if (object.minBet != null)
                if ($util.Long)
                    (message.minBet = $util.Long.fromValue(object.minBet)).unsigned = false;
                else if (typeof object.minBet === "string")
                    message.minBet = parseInt(object.minBet, 10);
                else if (typeof object.minBet === "number")
                    message.minBet = object.minBet;
                else if (typeof object.minBet === "object")
                    message.minBet = new $util.LongBits(object.minBet.low >>> 0, object.minBet.high >>> 0).toNumber();
            if (object.maxBet != null)
                if ($util.Long)
                    (message.maxBet = $util.Long.fromValue(object.maxBet)).unsigned = false;
                else if (typeof object.maxBet === "string")
                    message.maxBet = parseInt(object.maxBet, 10);
                else if (typeof object.maxBet === "number")
                    message.maxBet = object.maxBet;
                else if (typeof object.maxBet === "object")
                    message.maxBet = new $util.LongBits(object.maxBet.low >>> 0, object.maxBet.high >>> 0).toNumber();
            if (object.status != null)
                message.status = String(object.status);
            return message;
        };

        /**
         * Creates a plain object from a Room message. Also converts values to other types if specified.
         * @function toObject
         * @memberof slot.Room
         * @static
         * @param {slot.Room} message Room
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Room.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.roomId = "";
                object.roomName = "";
                object.maxPlayers = 0;
                object.currentPlayers = 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.minBet = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.minBet = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.maxBet = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.maxBet = options.longs === String ? "0" : 0;
                object.status = "";
            }
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                object.roomId = message.roomId;
            if (message.roomName != null && message.hasOwnProperty("roomName"))
                object.roomName = message.roomName;
            if (message.maxPlayers != null && message.hasOwnProperty("maxPlayers"))
                object.maxPlayers = message.maxPlayers;
            if (message.currentPlayers != null && message.hasOwnProperty("currentPlayers"))
                object.currentPlayers = message.currentPlayers;
            if (message.minBet != null && message.hasOwnProperty("minBet"))
                if (typeof message.minBet === "number")
                    object.minBet = options.longs === String ? String(message.minBet) : message.minBet;
                else
                    object.minBet = options.longs === String ? $util.Long.prototype.toString.call(message.minBet) : options.longs === Number ? new $util.LongBits(message.minBet.low >>> 0, message.minBet.high >>> 0).toNumber() : message.minBet;
            if (message.maxBet != null && message.hasOwnProperty("maxBet"))
                if (typeof message.maxBet === "number")
                    object.maxBet = options.longs === String ? String(message.maxBet) : message.maxBet;
                else
                    object.maxBet = options.longs === String ? $util.Long.prototype.toString.call(message.maxBet) : options.longs === Number ? new $util.LongBits(message.maxBet.low >>> 0, message.maxBet.high >>> 0).toNumber() : message.maxBet;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = message.status;
            return object;
        };

        /**
         * Converts this Room to JSON.
         * @function toJSON
         * @memberof slot.Room
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Room.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Room
         * @function getTypeUrl
         * @memberof slot.Room
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Room.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/slot.Room";
        };

        return Room;
    })();

    slot.ClientMessage = (function() {

        /**
         * Properties of a ClientMessage.
         * @memberof slot
         * @interface IClientMessage
         * @property {string|null} [type] ClientMessage type
         * @property {string|null} [playerId] ClientMessage playerId
         * @property {string|null} [roomId] ClientMessage roomId
         * @property {number|Long|null} [betAmount] ClientMessage betAmount
         * @property {string|null} [bonusType] ClientMessage bonusType
         */

        /**
         * Constructs a new ClientMessage.
         * @memberof slot
         * @classdesc Represents a ClientMessage.
         * @implements IClientMessage
         * @constructor
         * @param {slot.IClientMessage=} [properties] Properties to set
         */
        function ClientMessage(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ClientMessage type.
         * @member {string} type
         * @memberof slot.ClientMessage
         * @instance
         */
        ClientMessage.prototype.type = "";

        /**
         * ClientMessage playerId.
         * @member {string} playerId
         * @memberof slot.ClientMessage
         * @instance
         */
        ClientMessage.prototype.playerId = "";

        /**
         * ClientMessage roomId.
         * @member {string} roomId
         * @memberof slot.ClientMessage
         * @instance
         */
        ClientMessage.prototype.roomId = "";

        /**
         * ClientMessage betAmount.
         * @member {number|Long} betAmount
         * @memberof slot.ClientMessage
         * @instance
         */
        ClientMessage.prototype.betAmount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ClientMessage bonusType.
         * @member {string} bonusType
         * @memberof slot.ClientMessage
         * @instance
         */
        ClientMessage.prototype.bonusType = "";

        /**
         * Creates a new ClientMessage instance using the specified properties.
         * @function create
         * @memberof slot.ClientMessage
         * @static
         * @param {slot.IClientMessage=} [properties] Properties to set
         * @returns {slot.ClientMessage} ClientMessage instance
         */
        ClientMessage.create = function create(properties) {
            return new ClientMessage(properties);
        };

        /**
         * Encodes the specified ClientMessage message. Does not implicitly {@link slot.ClientMessage.verify|verify} messages.
         * @function encode
         * @memberof slot.ClientMessage
         * @static
         * @param {slot.IClientMessage} message ClientMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ClientMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.type);
            if (message.playerId != null && Object.hasOwnProperty.call(message, "playerId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.playerId);
            if (message.roomId != null && Object.hasOwnProperty.call(message, "roomId"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.roomId);
            if (message.betAmount != null && Object.hasOwnProperty.call(message, "betAmount"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.betAmount);
            if (message.bonusType != null && Object.hasOwnProperty.call(message, "bonusType"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.bonusType);
            return writer;
        };

        /**
         * Encodes the specified ClientMessage message, length delimited. Does not implicitly {@link slot.ClientMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof slot.ClientMessage
         * @static
         * @param {slot.IClientMessage} message ClientMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ClientMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ClientMessage message from the specified reader or buffer.
         * @function decode
         * @memberof slot.ClientMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {slot.ClientMessage} ClientMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ClientMessage.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.slot.ClientMessage();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.type = reader.string();
                        break;
                    }
                case 2: {
                        message.playerId = reader.string();
                        break;
                    }
                case 3: {
                        message.roomId = reader.string();
                        break;
                    }
                case 4: {
                        message.betAmount = reader.int64();
                        break;
                    }
                case 5: {
                        message.bonusType = reader.string();
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
         * Decodes a ClientMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof slot.ClientMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {slot.ClientMessage} ClientMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ClientMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ClientMessage message.
         * @function verify
         * @memberof slot.ClientMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ClientMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isString(message.type))
                    return "type: string expected";
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                if (!$util.isString(message.playerId))
                    return "playerId: string expected";
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                if (!$util.isString(message.roomId))
                    return "roomId: string expected";
            if (message.betAmount != null && message.hasOwnProperty("betAmount"))
                if (!$util.isInteger(message.betAmount) && !(message.betAmount && $util.isInteger(message.betAmount.low) && $util.isInteger(message.betAmount.high)))
                    return "betAmount: integer|Long expected";
            if (message.bonusType != null && message.hasOwnProperty("bonusType"))
                if (!$util.isString(message.bonusType))
                    return "bonusType: string expected";
            return null;
        };

        /**
         * Creates a ClientMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof slot.ClientMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {slot.ClientMessage} ClientMessage
         */
        ClientMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.slot.ClientMessage)
                return object;
            let message = new $root.slot.ClientMessage();
            if (object.type != null)
                message.type = String(object.type);
            if (object.playerId != null)
                message.playerId = String(object.playerId);
            if (object.roomId != null)
                message.roomId = String(object.roomId);
            if (object.betAmount != null)
                if ($util.Long)
                    (message.betAmount = $util.Long.fromValue(object.betAmount)).unsigned = false;
                else if (typeof object.betAmount === "string")
                    message.betAmount = parseInt(object.betAmount, 10);
                else if (typeof object.betAmount === "number")
                    message.betAmount = object.betAmount;
                else if (typeof object.betAmount === "object")
                    message.betAmount = new $util.LongBits(object.betAmount.low >>> 0, object.betAmount.high >>> 0).toNumber();
            if (object.bonusType != null)
                message.bonusType = String(object.bonusType);
            return message;
        };

        /**
         * Creates a plain object from a ClientMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof slot.ClientMessage
         * @static
         * @param {slot.ClientMessage} message ClientMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ClientMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.type = "";
                object.playerId = "";
                object.roomId = "";
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.betAmount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.betAmount = options.longs === String ? "0" : 0;
                object.bonusType = "";
            }
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                object.playerId = message.playerId;
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                object.roomId = message.roomId;
            if (message.betAmount != null && message.hasOwnProperty("betAmount"))
                if (typeof message.betAmount === "number")
                    object.betAmount = options.longs === String ? String(message.betAmount) : message.betAmount;
                else
                    object.betAmount = options.longs === String ? $util.Long.prototype.toString.call(message.betAmount) : options.longs === Number ? new $util.LongBits(message.betAmount.low >>> 0, message.betAmount.high >>> 0).toNumber() : message.betAmount;
            if (message.bonusType != null && message.hasOwnProperty("bonusType"))
                object.bonusType = message.bonusType;
            return object;
        };

        /**
         * Converts this ClientMessage to JSON.
         * @function toJSON
         * @memberof slot.ClientMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ClientMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ClientMessage
         * @function getTypeUrl
         * @memberof slot.ClientMessage
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ClientMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/slot.ClientMessage";
        };

        return ClientMessage;
    })();

    slot.ServerMessage = (function() {

        /**
         * Properties of a ServerMessage.
         * @memberof slot
         * @interface IServerMessage
         * @property {string|null} [type] ServerMessage type
         * @property {slot.IRoom|null} [room] ServerMessage room
         * @property {slot.IPlayer|null} [player] ServerMessage player
         * @property {slot.ISpinResult|null} [spinResult] ServerMessage spinResult
         * @property {string|null} [errorMessage] ServerMessage errorMessage
         * @property {Array.<slot.IRoom>|null} [availableRooms] ServerMessage availableRooms
         */

        /**
         * Constructs a new ServerMessage.
         * @memberof slot
         * @classdesc Represents a ServerMessage.
         * @implements IServerMessage
         * @constructor
         * @param {slot.IServerMessage=} [properties] Properties to set
         */
        function ServerMessage(properties) {
            this.availableRooms = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ServerMessage type.
         * @member {string} type
         * @memberof slot.ServerMessage
         * @instance
         */
        ServerMessage.prototype.type = "";

        /**
         * ServerMessage room.
         * @member {slot.IRoom|null|undefined} room
         * @memberof slot.ServerMessage
         * @instance
         */
        ServerMessage.prototype.room = null;

        /**
         * ServerMessage player.
         * @member {slot.IPlayer|null|undefined} player
         * @memberof slot.ServerMessage
         * @instance
         */
        ServerMessage.prototype.player = null;

        /**
         * ServerMessage spinResult.
         * @member {slot.ISpinResult|null|undefined} spinResult
         * @memberof slot.ServerMessage
         * @instance
         */
        ServerMessage.prototype.spinResult = null;

        /**
         * ServerMessage errorMessage.
         * @member {string} errorMessage
         * @memberof slot.ServerMessage
         * @instance
         */
        ServerMessage.prototype.errorMessage = "";

        /**
         * ServerMessage availableRooms.
         * @member {Array.<slot.IRoom>} availableRooms
         * @memberof slot.ServerMessage
         * @instance
         */
        ServerMessage.prototype.availableRooms = $util.emptyArray;

        /**
         * Creates a new ServerMessage instance using the specified properties.
         * @function create
         * @memberof slot.ServerMessage
         * @static
         * @param {slot.IServerMessage=} [properties] Properties to set
         * @returns {slot.ServerMessage} ServerMessage instance
         */
        ServerMessage.create = function create(properties) {
            return new ServerMessage(properties);
        };

        /**
         * Encodes the specified ServerMessage message. Does not implicitly {@link slot.ServerMessage.verify|verify} messages.
         * @function encode
         * @memberof slot.ServerMessage
         * @static
         * @param {slot.IServerMessage} message ServerMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ServerMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.type);
            if (message.room != null && Object.hasOwnProperty.call(message, "room"))
                $root.slot.Room.encode(message.room, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.player != null && Object.hasOwnProperty.call(message, "player"))
                $root.slot.Player.encode(message.player, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.spinResult != null && Object.hasOwnProperty.call(message, "spinResult"))
                $root.slot.SpinResult.encode(message.spinResult, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.errorMessage != null && Object.hasOwnProperty.call(message, "errorMessage"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.errorMessage);
            if (message.availableRooms != null && message.availableRooms.length)
                for (let i = 0; i < message.availableRooms.length; ++i)
                    $root.slot.Room.encode(message.availableRooms[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ServerMessage message, length delimited. Does not implicitly {@link slot.ServerMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof slot.ServerMessage
         * @static
         * @param {slot.IServerMessage} message ServerMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ServerMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ServerMessage message from the specified reader or buffer.
         * @function decode
         * @memberof slot.ServerMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {slot.ServerMessage} ServerMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ServerMessage.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.slot.ServerMessage();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.type = reader.string();
                        break;
                    }
                case 2: {
                        message.room = $root.slot.Room.decode(reader, reader.uint32());
                        break;
                    }
                case 3: {
                        message.player = $root.slot.Player.decode(reader, reader.uint32());
                        break;
                    }
                case 4: {
                        message.spinResult = $root.slot.SpinResult.decode(reader, reader.uint32());
                        break;
                    }
                case 5: {
                        message.errorMessage = reader.string();
                        break;
                    }
                case 6: {
                        if (!(message.availableRooms && message.availableRooms.length))
                            message.availableRooms = [];
                        message.availableRooms.push($root.slot.Room.decode(reader, reader.uint32()));
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
         * Decodes a ServerMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof slot.ServerMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {slot.ServerMessage} ServerMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ServerMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ServerMessage message.
         * @function verify
         * @memberof slot.ServerMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ServerMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isString(message.type))
                    return "type: string expected";
            if (message.room != null && message.hasOwnProperty("room")) {
                let error = $root.slot.Room.verify(message.room);
                if (error)
                    return "room." + error;
            }
            if (message.player != null && message.hasOwnProperty("player")) {
                let error = $root.slot.Player.verify(message.player);
                if (error)
                    return "player." + error;
            }
            if (message.spinResult != null && message.hasOwnProperty("spinResult")) {
                let error = $root.slot.SpinResult.verify(message.spinResult);
                if (error)
                    return "spinResult." + error;
            }
            if (message.errorMessage != null && message.hasOwnProperty("errorMessage"))
                if (!$util.isString(message.errorMessage))
                    return "errorMessage: string expected";
            if (message.availableRooms != null && message.hasOwnProperty("availableRooms")) {
                if (!Array.isArray(message.availableRooms))
                    return "availableRooms: array expected";
                for (let i = 0; i < message.availableRooms.length; ++i) {
                    let error = $root.slot.Room.verify(message.availableRooms[i]);
                    if (error)
                        return "availableRooms." + error;
                }
            }
            return null;
        };

        /**
         * Creates a ServerMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof slot.ServerMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {slot.ServerMessage} ServerMessage
         */
        ServerMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.slot.ServerMessage)
                return object;
            let message = new $root.slot.ServerMessage();
            if (object.type != null)
                message.type = String(object.type);
            if (object.room != null) {
                if (typeof object.room !== "object")
                    throw TypeError(".slot.ServerMessage.room: object expected");
                message.room = $root.slot.Room.fromObject(object.room);
            }
            if (object.player != null) {
                if (typeof object.player !== "object")
                    throw TypeError(".slot.ServerMessage.player: object expected");
                message.player = $root.slot.Player.fromObject(object.player);
            }
            if (object.spinResult != null) {
                if (typeof object.spinResult !== "object")
                    throw TypeError(".slot.ServerMessage.spinResult: object expected");
                message.spinResult = $root.slot.SpinResult.fromObject(object.spinResult);
            }
            if (object.errorMessage != null)
                message.errorMessage = String(object.errorMessage);
            if (object.availableRooms) {
                if (!Array.isArray(object.availableRooms))
                    throw TypeError(".slot.ServerMessage.availableRooms: array expected");
                message.availableRooms = [];
                for (let i = 0; i < object.availableRooms.length; ++i) {
                    if (typeof object.availableRooms[i] !== "object")
                        throw TypeError(".slot.ServerMessage.availableRooms: object expected");
                    message.availableRooms[i] = $root.slot.Room.fromObject(object.availableRooms[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a ServerMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof slot.ServerMessage
         * @static
         * @param {slot.ServerMessage} message ServerMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ServerMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.availableRooms = [];
            if (options.defaults) {
                object.type = "";
                object.room = null;
                object.player = null;
                object.spinResult = null;
                object.errorMessage = "";
            }
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.room != null && message.hasOwnProperty("room"))
                object.room = $root.slot.Room.toObject(message.room, options);
            if (message.player != null && message.hasOwnProperty("player"))
                object.player = $root.slot.Player.toObject(message.player, options);
            if (message.spinResult != null && message.hasOwnProperty("spinResult"))
                object.spinResult = $root.slot.SpinResult.toObject(message.spinResult, options);
            if (message.errorMessage != null && message.hasOwnProperty("errorMessage"))
                object.errorMessage = message.errorMessage;
            if (message.availableRooms && message.availableRooms.length) {
                object.availableRooms = [];
                for (let j = 0; j < message.availableRooms.length; ++j)
                    object.availableRooms[j] = $root.slot.Room.toObject(message.availableRooms[j], options);
            }
            return object;
        };

        /**
         * Converts this ServerMessage to JSON.
         * @function toJSON
         * @memberof slot.ServerMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ServerMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ServerMessage
         * @function getTypeUrl
         * @memberof slot.ServerMessage
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ServerMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/slot.ServerMessage";
        };

        return ServerMessage;
    })();

    return slot;
})();

export { $root as default };
