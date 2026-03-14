/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const game = $root.game = (() => {

    /**
     * Namespace game.
     * @exports game
     * @namespace
     */
    const game = {};

    game.Player = (function() {

        /**
         * Properties of a Player.
         * @memberof game
         * @interface IPlayer
         * @property {string|null} [id] Player id
         * @property {string|null} [name] Player name
         * @property {number|null} [hp] Player hp
         * @property {number|null} [maxHp] Player maxHp
         */

        /**
         * Constructs a new Player.
         * @memberof game
         * @classdesc Represents a Player.
         * @implements IPlayer
         * @constructor
         * @param {game.IPlayer=} [properties] Properties to set
         */
        function Player(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Player id.
         * @member {string} id
         * @memberof game.Player
         * @instance
         */
        Player.prototype.id = "";

        /**
         * Player name.
         * @member {string} name
         * @memberof game.Player
         * @instance
         */
        Player.prototype.name = "";

        /**
         * Player hp.
         * @member {number} hp
         * @memberof game.Player
         * @instance
         */
        Player.prototype.hp = 0;

        /**
         * Player maxHp.
         * @member {number} maxHp
         * @memberof game.Player
         * @instance
         */
        Player.prototype.maxHp = 0;

        /**
         * Creates a new Player instance using the specified properties.
         * @function create
         * @memberof game.Player
         * @static
         * @param {game.IPlayer=} [properties] Properties to set
         * @returns {game.Player} Player instance
         */
        Player.create = function create(properties) {
            return new Player(properties);
        };

        /**
         * Encodes the specified Player message. Does not implicitly {@link game.Player.verify|verify} messages.
         * @function encode
         * @memberof game.Player
         * @static
         * @param {game.IPlayer} message Player message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Player.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.hp != null && Object.hasOwnProperty.call(message, "hp"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.hp);
            if (message.maxHp != null && Object.hasOwnProperty.call(message, "maxHp"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.maxHp);
            return writer;
        };

        /**
         * Encodes the specified Player message, length delimited. Does not implicitly {@link game.Player.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.Player
         * @static
         * @param {game.IPlayer} message Player message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Player.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Player message from the specified reader or buffer.
         * @function decode
         * @memberof game.Player
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.Player} Player
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Player.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.Player();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.string();
                        break;
                    }
                case 2: {
                        message.name = reader.string();
                        break;
                    }
                case 3: {
                        message.hp = reader.uint32();
                        break;
                    }
                case 4: {
                        message.maxHp = reader.uint32();
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
         * @memberof game.Player
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.Player} Player
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
         * @memberof game.Player
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Player.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.hp != null && message.hasOwnProperty("hp"))
                if (!$util.isInteger(message.hp))
                    return "hp: integer expected";
            if (message.maxHp != null && message.hasOwnProperty("maxHp"))
                if (!$util.isInteger(message.maxHp))
                    return "maxHp: integer expected";
            return null;
        };

        /**
         * Creates a Player message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.Player
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.Player} Player
         */
        Player.fromObject = function fromObject(object) {
            if (object instanceof $root.game.Player)
                return object;
            let message = new $root.game.Player();
            if (object.id != null)
                message.id = String(object.id);
            if (object.name != null)
                message.name = String(object.name);
            if (object.hp != null)
                message.hp = object.hp >>> 0;
            if (object.maxHp != null)
                message.maxHp = object.maxHp >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a Player message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.Player
         * @static
         * @param {game.Player} message Player
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Player.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.id = "";
                object.name = "";
                object.hp = 0;
                object.maxHp = 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.hp != null && message.hasOwnProperty("hp"))
                object.hp = message.hp;
            if (message.maxHp != null && message.hasOwnProperty("maxHp"))
                object.maxHp = message.maxHp;
            return object;
        };

        /**
         * Converts this Player to JSON.
         * @function toJSON
         * @memberof game.Player
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Player.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Player
         * @function getTypeUrl
         * @memberof game.Player
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Player.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/game.Player";
        };

        return Player;
    })();

    game.BattleAction = (function() {

        /**
         * Properties of a BattleAction.
         * @memberof game
         * @interface IBattleAction
         * @property {string|null} [playerId] BattleAction playerId
         * @property {string|null} [action] BattleAction action
         * @property {string|null} [targetId] BattleAction targetId
         * @property {number|null} [value] BattleAction value
         */

        /**
         * Constructs a new BattleAction.
         * @memberof game
         * @classdesc Represents a BattleAction.
         * @implements IBattleAction
         * @constructor
         * @param {game.IBattleAction=} [properties] Properties to set
         */
        function BattleAction(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BattleAction playerId.
         * @member {string} playerId
         * @memberof game.BattleAction
         * @instance
         */
        BattleAction.prototype.playerId = "";

        /**
         * BattleAction action.
         * @member {string} action
         * @memberof game.BattleAction
         * @instance
         */
        BattleAction.prototype.action = "";

        /**
         * BattleAction targetId.
         * @member {string} targetId
         * @memberof game.BattleAction
         * @instance
         */
        BattleAction.prototype.targetId = "";

        /**
         * BattleAction value.
         * @member {number} value
         * @memberof game.BattleAction
         * @instance
         */
        BattleAction.prototype.value = 0;

        /**
         * Creates a new BattleAction instance using the specified properties.
         * @function create
         * @memberof game.BattleAction
         * @static
         * @param {game.IBattleAction=} [properties] Properties to set
         * @returns {game.BattleAction} BattleAction instance
         */
        BattleAction.create = function create(properties) {
            return new BattleAction(properties);
        };

        /**
         * Encodes the specified BattleAction message. Does not implicitly {@link game.BattleAction.verify|verify} messages.
         * @function encode
         * @memberof game.BattleAction
         * @static
         * @param {game.IBattleAction} message BattleAction message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BattleAction.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.playerId != null && Object.hasOwnProperty.call(message, "playerId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.playerId);
            if (message.action != null && Object.hasOwnProperty.call(message, "action"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.action);
            if (message.targetId != null && Object.hasOwnProperty.call(message, "targetId"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.targetId);
            if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.value);
            return writer;
        };

        /**
         * Encodes the specified BattleAction message, length delimited. Does not implicitly {@link game.BattleAction.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.BattleAction
         * @static
         * @param {game.IBattleAction} message BattleAction message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BattleAction.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BattleAction message from the specified reader or buffer.
         * @function decode
         * @memberof game.BattleAction
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.BattleAction} BattleAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BattleAction.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.BattleAction();
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
                        message.action = reader.string();
                        break;
                    }
                case 3: {
                        message.targetId = reader.string();
                        break;
                    }
                case 4: {
                        message.value = reader.uint32();
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
         * Decodes a BattleAction message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.BattleAction
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.BattleAction} BattleAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BattleAction.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BattleAction message.
         * @function verify
         * @memberof game.BattleAction
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BattleAction.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                if (!$util.isString(message.playerId))
                    return "playerId: string expected";
            if (message.action != null && message.hasOwnProperty("action"))
                if (!$util.isString(message.action))
                    return "action: string expected";
            if (message.targetId != null && message.hasOwnProperty("targetId"))
                if (!$util.isString(message.targetId))
                    return "targetId: string expected";
            if (message.value != null && message.hasOwnProperty("value"))
                if (!$util.isInteger(message.value))
                    return "value: integer expected";
            return null;
        };

        /**
         * Creates a BattleAction message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.BattleAction
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.BattleAction} BattleAction
         */
        BattleAction.fromObject = function fromObject(object) {
            if (object instanceof $root.game.BattleAction)
                return object;
            let message = new $root.game.BattleAction();
            if (object.playerId != null)
                message.playerId = String(object.playerId);
            if (object.action != null)
                message.action = String(object.action);
            if (object.targetId != null)
                message.targetId = String(object.targetId);
            if (object.value != null)
                message.value = object.value >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a BattleAction message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.BattleAction
         * @static
         * @param {game.BattleAction} message BattleAction
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BattleAction.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.playerId = "";
                object.action = "";
                object.targetId = "";
                object.value = 0;
            }
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                object.playerId = message.playerId;
            if (message.action != null && message.hasOwnProperty("action"))
                object.action = message.action;
            if (message.targetId != null && message.hasOwnProperty("targetId"))
                object.targetId = message.targetId;
            if (message.value != null && message.hasOwnProperty("value"))
                object.value = message.value;
            return object;
        };

        /**
         * Converts this BattleAction to JSON.
         * @function toJSON
         * @memberof game.BattleAction
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BattleAction.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for BattleAction
         * @function getTypeUrl
         * @memberof game.BattleAction
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        BattleAction.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/game.BattleAction";
        };

        return BattleAction;
    })();

    game.ClientMessage = (function() {

        /**
         * Properties of a ClientMessage.
         * @memberof game
         * @interface IClientMessage
         * @property {string|null} [type] ClientMessage type
         * @property {game.IBattleAction|null} [action] ClientMessage action
         */

        /**
         * Constructs a new ClientMessage.
         * @memberof game
         * @classdesc Represents a ClientMessage.
         * @implements IClientMessage
         * @constructor
         * @param {game.IClientMessage=} [properties] Properties to set
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
         * @memberof game.ClientMessage
         * @instance
         */
        ClientMessage.prototype.type = "";

        /**
         * ClientMessage action.
         * @member {game.IBattleAction|null|undefined} action
         * @memberof game.ClientMessage
         * @instance
         */
        ClientMessage.prototype.action = null;

        /**
         * Creates a new ClientMessage instance using the specified properties.
         * @function create
         * @memberof game.ClientMessage
         * @static
         * @param {game.IClientMessage=} [properties] Properties to set
         * @returns {game.ClientMessage} ClientMessage instance
         */
        ClientMessage.create = function create(properties) {
            return new ClientMessage(properties);
        };

        /**
         * Encodes the specified ClientMessage message. Does not implicitly {@link game.ClientMessage.verify|verify} messages.
         * @function encode
         * @memberof game.ClientMessage
         * @static
         * @param {game.IClientMessage} message ClientMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ClientMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.type);
            if (message.action != null && Object.hasOwnProperty.call(message, "action"))
                $root.game.BattleAction.encode(message.action, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ClientMessage message, length delimited. Does not implicitly {@link game.ClientMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.ClientMessage
         * @static
         * @param {game.IClientMessage} message ClientMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ClientMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ClientMessage message from the specified reader or buffer.
         * @function decode
         * @memberof game.ClientMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.ClientMessage} ClientMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ClientMessage.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.ClientMessage();
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
                        message.action = $root.game.BattleAction.decode(reader, reader.uint32());
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
         * @memberof game.ClientMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.ClientMessage} ClientMessage
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
         * @memberof game.ClientMessage
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
            if (message.action != null && message.hasOwnProperty("action")) {
                let error = $root.game.BattleAction.verify(message.action);
                if (error)
                    return "action." + error;
            }
            return null;
        };

        /**
         * Creates a ClientMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.ClientMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.ClientMessage} ClientMessage
         */
        ClientMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.game.ClientMessage)
                return object;
            let message = new $root.game.ClientMessage();
            if (object.type != null)
                message.type = String(object.type);
            if (object.action != null) {
                if (typeof object.action !== "object")
                    throw TypeError(".game.ClientMessage.action: object expected");
                message.action = $root.game.BattleAction.fromObject(object.action);
            }
            return message;
        };

        /**
         * Creates a plain object from a ClientMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.ClientMessage
         * @static
         * @param {game.ClientMessage} message ClientMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ClientMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.type = "";
                object.action = null;
            }
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.action != null && message.hasOwnProperty("action"))
                object.action = $root.game.BattleAction.toObject(message.action, options);
            return object;
        };

        /**
         * Converts this ClientMessage to JSON.
         * @function toJSON
         * @memberof game.ClientMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ClientMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ClientMessage
         * @function getTypeUrl
         * @memberof game.ClientMessage
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ClientMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/game.ClientMessage";
        };

        return ClientMessage;
    })();

    game.ServerMessage = (function() {

        /**
         * Properties of a ServerMessage.
         * @memberof game
         * @interface IServerMessage
         * @property {string|null} [type] ServerMessage type
         * @property {Array.<game.IPlayer>|null} [players] ServerMessage players
         * @property {string|null} [result] ServerMessage result
         * @property {game.IPlayer|null} [player] ServerMessage player
         * @property {boolean|null} [isMyTurn] ServerMessage isMyTurn
         */

        /**
         * Constructs a new ServerMessage.
         * @memberof game
         * @classdesc Represents a ServerMessage.
         * @implements IServerMessage
         * @constructor
         * @param {game.IServerMessage=} [properties] Properties to set
         */
        function ServerMessage(properties) {
            this.players = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ServerMessage type.
         * @member {string} type
         * @memberof game.ServerMessage
         * @instance
         */
        ServerMessage.prototype.type = "";

        /**
         * ServerMessage players.
         * @member {Array.<game.IPlayer>} players
         * @memberof game.ServerMessage
         * @instance
         */
        ServerMessage.prototype.players = $util.emptyArray;

        /**
         * ServerMessage result.
         * @member {string} result
         * @memberof game.ServerMessage
         * @instance
         */
        ServerMessage.prototype.result = "";

        /**
         * ServerMessage player.
         * @member {game.IPlayer|null|undefined} player
         * @memberof game.ServerMessage
         * @instance
         */
        ServerMessage.prototype.player = null;

        /**
         * ServerMessage isMyTurn.
         * @member {boolean} isMyTurn
         * @memberof game.ServerMessage
         * @instance
         */
        ServerMessage.prototype.isMyTurn = false;

        /**
         * Creates a new ServerMessage instance using the specified properties.
         * @function create
         * @memberof game.ServerMessage
         * @static
         * @param {game.IServerMessage=} [properties] Properties to set
         * @returns {game.ServerMessage} ServerMessage instance
         */
        ServerMessage.create = function create(properties) {
            return new ServerMessage(properties);
        };

        /**
         * Encodes the specified ServerMessage message. Does not implicitly {@link game.ServerMessage.verify|verify} messages.
         * @function encode
         * @memberof game.ServerMessage
         * @static
         * @param {game.IServerMessage} message ServerMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ServerMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.type);
            if (message.players != null && message.players.length)
                for (let i = 0; i < message.players.length; ++i)
                    $root.game.Player.encode(message.players[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.result != null && Object.hasOwnProperty.call(message, "result"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.result);
            if (message.player != null && Object.hasOwnProperty.call(message, "player"))
                $root.game.Player.encode(message.player, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.isMyTurn != null && Object.hasOwnProperty.call(message, "isMyTurn"))
                writer.uint32(/* id 5, wireType 0 =*/40).bool(message.isMyTurn);
            return writer;
        };

        /**
         * Encodes the specified ServerMessage message, length delimited. Does not implicitly {@link game.ServerMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.ServerMessage
         * @static
         * @param {game.IServerMessage} message ServerMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ServerMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ServerMessage message from the specified reader or buffer.
         * @function decode
         * @memberof game.ServerMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.ServerMessage} ServerMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ServerMessage.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.ServerMessage();
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
                        if (!(message.players && message.players.length))
                            message.players = [];
                        message.players.push($root.game.Player.decode(reader, reader.uint32()));
                        break;
                    }
                case 3: {
                        message.result = reader.string();
                        break;
                    }
                case 4: {
                        message.player = $root.game.Player.decode(reader, reader.uint32());
                        break;
                    }
                case 5: {
                        message.isMyTurn = reader.bool();
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
         * @memberof game.ServerMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.ServerMessage} ServerMessage
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
         * @memberof game.ServerMessage
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
            if (message.players != null && message.hasOwnProperty("players")) {
                if (!Array.isArray(message.players))
                    return "players: array expected";
                for (let i = 0; i < message.players.length; ++i) {
                    let error = $root.game.Player.verify(message.players[i]);
                    if (error)
                        return "players." + error;
                }
            }
            if (message.result != null && message.hasOwnProperty("result"))
                if (!$util.isString(message.result))
                    return "result: string expected";
            if (message.player != null && message.hasOwnProperty("player")) {
                let error = $root.game.Player.verify(message.player);
                if (error)
                    return "player." + error;
            }
            if (message.isMyTurn != null && message.hasOwnProperty("isMyTurn"))
                if (typeof message.isMyTurn !== "boolean")
                    return "isMyTurn: boolean expected";
            return null;
        };

        /**
         * Creates a ServerMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.ServerMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.ServerMessage} ServerMessage
         */
        ServerMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.game.ServerMessage)
                return object;
            let message = new $root.game.ServerMessage();
            if (object.type != null)
                message.type = String(object.type);
            if (object.players) {
                if (!Array.isArray(object.players))
                    throw TypeError(".game.ServerMessage.players: array expected");
                message.players = [];
                for (let i = 0; i < object.players.length; ++i) {
                    if (typeof object.players[i] !== "object")
                        throw TypeError(".game.ServerMessage.players: object expected");
                    message.players[i] = $root.game.Player.fromObject(object.players[i]);
                }
            }
            if (object.result != null)
                message.result = String(object.result);
            if (object.player != null) {
                if (typeof object.player !== "object")
                    throw TypeError(".game.ServerMessage.player: object expected");
                message.player = $root.game.Player.fromObject(object.player);
            }
            if (object.isMyTurn != null)
                message.isMyTurn = Boolean(object.isMyTurn);
            return message;
        };

        /**
         * Creates a plain object from a ServerMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.ServerMessage
         * @static
         * @param {game.ServerMessage} message ServerMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ServerMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.players = [];
            if (options.defaults) {
                object.type = "";
                object.result = "";
                object.player = null;
                object.isMyTurn = false;
            }
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.players && message.players.length) {
                object.players = [];
                for (let j = 0; j < message.players.length; ++j)
                    object.players[j] = $root.game.Player.toObject(message.players[j], options);
            }
            if (message.result != null && message.hasOwnProperty("result"))
                object.result = message.result;
            if (message.player != null && message.hasOwnProperty("player"))
                object.player = $root.game.Player.toObject(message.player, options);
            if (message.isMyTurn != null && message.hasOwnProperty("isMyTurn"))
                object.isMyTurn = message.isMyTurn;
            return object;
        };

        /**
         * Converts this ServerMessage to JSON.
         * @function toJSON
         * @memberof game.ServerMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ServerMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ServerMessage
         * @function getTypeUrl
         * @memberof game.ServerMessage
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ServerMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/game.ServerMessage";
        };

        return ServerMessage;
    })();

    return game;
})();

export { $root as default };
