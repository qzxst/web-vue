import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace game. */
export namespace game {

    /** Properties of a Player. */
    interface IPlayer {

        /** Player id */
        id?: (string|null);

        /** Player name */
        name?: (string|null);

        /** Player hp */
        hp?: (number|null);

        /** Player maxHp */
        maxHp?: (number|null);
    }

    /** Represents a Player. */
    class Player implements IPlayer {

        /**
         * Constructs a new Player.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IPlayer);

        /** Player id. */
        public id: string;

        /** Player name. */
        public name: string;

        /** Player hp. */
        public hp: number;

        /** Player maxHp. */
        public maxHp: number;

        /**
         * Creates a new Player instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Player instance
         */
        public static create(properties?: game.IPlayer): game.Player;

        /**
         * Encodes the specified Player message. Does not implicitly {@link game.Player.verify|verify} messages.
         * @param message Player message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IPlayer, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Player message, length delimited. Does not implicitly {@link game.Player.verify|verify} messages.
         * @param message Player message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IPlayer, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Player message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Player
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.Player;

        /**
         * Decodes a Player message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Player
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.Player;

        /**
         * Verifies a Player message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Player message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Player
         */
        public static fromObject(object: { [k: string]: any }): game.Player;

        /**
         * Creates a plain object from a Player message. Also converts values to other types if specified.
         * @param message Player
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.Player, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Player to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Player
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a BattleAction. */
    interface IBattleAction {

        /** BattleAction playerId */
        playerId?: (string|null);

        /** BattleAction action */
        action?: (string|null);

        /** BattleAction targetId */
        targetId?: (string|null);

        /** BattleAction value */
        value?: (number|null);
    }

    /** Represents a BattleAction. */
    class BattleAction implements IBattleAction {

        /**
         * Constructs a new BattleAction.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IBattleAction);

        /** BattleAction playerId. */
        public playerId: string;

        /** BattleAction action. */
        public action: string;

        /** BattleAction targetId. */
        public targetId: string;

        /** BattleAction value. */
        public value: number;

        /**
         * Creates a new BattleAction instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BattleAction instance
         */
        public static create(properties?: game.IBattleAction): game.BattleAction;

        /**
         * Encodes the specified BattleAction message. Does not implicitly {@link game.BattleAction.verify|verify} messages.
         * @param message BattleAction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IBattleAction, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BattleAction message, length delimited. Does not implicitly {@link game.BattleAction.verify|verify} messages.
         * @param message BattleAction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IBattleAction, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BattleAction message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BattleAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.BattleAction;

        /**
         * Decodes a BattleAction message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BattleAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.BattleAction;

        /**
         * Verifies a BattleAction message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BattleAction message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BattleAction
         */
        public static fromObject(object: { [k: string]: any }): game.BattleAction;

        /**
         * Creates a plain object from a BattleAction message. Also converts values to other types if specified.
         * @param message BattleAction
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.BattleAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BattleAction to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for BattleAction
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ClientMessage. */
    interface IClientMessage {

        /** ClientMessage type */
        type?: (string|null);

        /** ClientMessage action */
        action?: (game.IBattleAction|null);
    }

    /** Represents a ClientMessage. */
    class ClientMessage implements IClientMessage {

        /**
         * Constructs a new ClientMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IClientMessage);

        /** ClientMessage type. */
        public type: string;

        /** ClientMessage action. */
        public action?: (game.IBattleAction|null);

        /**
         * Creates a new ClientMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ClientMessage instance
         */
        public static create(properties?: game.IClientMessage): game.ClientMessage;

        /**
         * Encodes the specified ClientMessage message. Does not implicitly {@link game.ClientMessage.verify|verify} messages.
         * @param message ClientMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IClientMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ClientMessage message, length delimited. Does not implicitly {@link game.ClientMessage.verify|verify} messages.
         * @param message ClientMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IClientMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ClientMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ClientMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.ClientMessage;

        /**
         * Decodes a ClientMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ClientMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.ClientMessage;

        /**
         * Verifies a ClientMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ClientMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ClientMessage
         */
        public static fromObject(object: { [k: string]: any }): game.ClientMessage;

        /**
         * Creates a plain object from a ClientMessage message. Also converts values to other types if specified.
         * @param message ClientMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.ClientMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ClientMessage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ClientMessage
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ServerMessage. */
    interface IServerMessage {

        /** ServerMessage type */
        type?: (string|null);

        /** ServerMessage players */
        players?: (game.IPlayer[]|null);

        /** ServerMessage result */
        result?: (string|null);

        /** ServerMessage player */
        player?: (game.IPlayer|null);

        /** ServerMessage isMyTurn */
        isMyTurn?: (boolean|null);
    }

    /** Represents a ServerMessage. */
    class ServerMessage implements IServerMessage {

        /**
         * Constructs a new ServerMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IServerMessage);

        /** ServerMessage type. */
        public type: string;

        /** ServerMessage players. */
        public players: game.IPlayer[];

        /** ServerMessage result. */
        public result: string;

        /** ServerMessage player. */
        public player?: (game.IPlayer|null);

        /** ServerMessage isMyTurn. */
        public isMyTurn: boolean;

        /**
         * Creates a new ServerMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ServerMessage instance
         */
        public static create(properties?: game.IServerMessage): game.ServerMessage;

        /**
         * Encodes the specified ServerMessage message. Does not implicitly {@link game.ServerMessage.verify|verify} messages.
         * @param message ServerMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IServerMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ServerMessage message, length delimited. Does not implicitly {@link game.ServerMessage.verify|verify} messages.
         * @param message ServerMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IServerMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ServerMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ServerMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.ServerMessage;

        /**
         * Decodes a ServerMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ServerMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.ServerMessage;

        /**
         * Verifies a ServerMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ServerMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ServerMessage
         */
        public static fromObject(object: { [k: string]: any }): game.ServerMessage;

        /**
         * Creates a plain object from a ServerMessage message. Also converts values to other types if specified.
         * @param message ServerMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.ServerMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ServerMessage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ServerMessage
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}
