import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace slot. */
export namespace slot {

    /** Properties of a Player. */
    interface IPlayer {

        /** Player playerId */
        playerId?: (string|null);

        /** Player playerName */
        playerName?: (string|null);

        /** Player balance */
        balance?: (number|Long|null);

        /** Player level */
        level?: (number|null);

        /** Player experience */
        experience?: (number|Long|null);

        /** Player lastLoginTime */
        lastLoginTime?: (number|Long|null);

        /** Player createdTime */
        createdTime?: (number|Long|null);
    }

    /** Represents a Player. */
    class Player implements IPlayer {

        /**
         * Constructs a new Player.
         * @param [properties] Properties to set
         */
        constructor(properties?: slot.IPlayer);

        /** Player playerId. */
        public playerId: string;

        /** Player playerName. */
        public playerName: string;

        /** Player balance. */
        public balance: (number|Long);

        /** Player level. */
        public level: number;

        /** Player experience. */
        public experience: (number|Long);

        /** Player lastLoginTime. */
        public lastLoginTime: (number|Long);

        /** Player createdTime. */
        public createdTime: (number|Long);

        /**
         * Creates a new Player instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Player instance
         */
        public static create(properties?: slot.IPlayer): slot.Player;

        /**
         * Encodes the specified Player message. Does not implicitly {@link slot.Player.verify|verify} messages.
         * @param message Player message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: slot.IPlayer, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Player message, length delimited. Does not implicitly {@link slot.Player.verify|verify} messages.
         * @param message Player message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: slot.IPlayer, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Player message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Player
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): slot.Player;

        /**
         * Decodes a Player message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Player
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): slot.Player;

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
        public static fromObject(object: { [k: string]: any }): slot.Player;

        /**
         * Creates a plain object from a Player message. Also converts values to other types if specified.
         * @param message Player
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: slot.Player, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

    /** Properties of a Symbol. */
    interface ISymbol {

        /** Symbol symbolId */
        symbolId?: (string|null);

        /** Symbol name */
        name?: (string|null);

        /** Symbol weight */
        weight?: (number|null);

        /** Symbol multiplier */
        multiplier?: (number|null);

        /** Symbol isWild */
        isWild?: (boolean|null);

        /** Symbol isScatter */
        isScatter?: (boolean|null);
    }

    /** Represents a Symbol. */
    class Symbol implements ISymbol {

        /**
         * Constructs a new Symbol.
         * @param [properties] Properties to set
         */
        constructor(properties?: slot.ISymbol);

        /** Symbol symbolId. */
        public symbolId: string;

        /** Symbol name. */
        public name: string;

        /** Symbol weight. */
        public weight: number;

        /** Symbol multiplier. */
        public multiplier: number;

        /** Symbol isWild. */
        public isWild: boolean;

        /** Symbol isScatter. */
        public isScatter: boolean;

        /**
         * Creates a new Symbol instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Symbol instance
         */
        public static create(properties?: slot.ISymbol): slot.Symbol;

        /**
         * Encodes the specified Symbol message. Does not implicitly {@link slot.Symbol.verify|verify} messages.
         * @param message Symbol message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: slot.ISymbol, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Symbol message, length delimited. Does not implicitly {@link slot.Symbol.verify|verify} messages.
         * @param message Symbol message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: slot.ISymbol, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Symbol message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Symbol
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): slot.Symbol;

        /**
         * Decodes a Symbol message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Symbol
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): slot.Symbol;

        /**
         * Verifies a Symbol message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Symbol message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Symbol
         */
        public static fromObject(object: { [k: string]: any }): slot.Symbol;

        /**
         * Creates a plain object from a Symbol message. Also converts values to other types if specified.
         * @param message Symbol
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: slot.Symbol, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Symbol to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Symbol
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SpinResult. */
    interface ISpinResult {

        /** SpinResult reels */
        reels?: (string[]|null);

        /** SpinResult winAmount */
        winAmount?: (number|Long|null);

        /** SpinResult winLines */
        winLines?: (slot.IWinLine[]|null);

        /** SpinResult isBonus */
        isBonus?: (boolean|null);

        /** SpinResult newBalance */
        newBalance?: (number|Long|null);
    }

    /** Represents a SpinResult. */
    class SpinResult implements ISpinResult {

        /**
         * Constructs a new SpinResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: slot.ISpinResult);

        /** SpinResult reels. */
        public reels: string[];

        /** SpinResult winAmount. */
        public winAmount: (number|Long);

        /** SpinResult winLines. */
        public winLines: slot.IWinLine[];

        /** SpinResult isBonus. */
        public isBonus: boolean;

        /** SpinResult newBalance. */
        public newBalance: (number|Long);

        /**
         * Creates a new SpinResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SpinResult instance
         */
        public static create(properties?: slot.ISpinResult): slot.SpinResult;

        /**
         * Encodes the specified SpinResult message. Does not implicitly {@link slot.SpinResult.verify|verify} messages.
         * @param message SpinResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: slot.ISpinResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SpinResult message, length delimited. Does not implicitly {@link slot.SpinResult.verify|verify} messages.
         * @param message SpinResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: slot.ISpinResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SpinResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SpinResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): slot.SpinResult;

        /**
         * Decodes a SpinResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SpinResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): slot.SpinResult;

        /**
         * Verifies a SpinResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SpinResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SpinResult
         */
        public static fromObject(object: { [k: string]: any }): slot.SpinResult;

        /**
         * Creates a plain object from a SpinResult message. Also converts values to other types if specified.
         * @param message SpinResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: slot.SpinResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SpinResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SpinResult
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a WinLine. */
    interface IWinLine {

        /** WinLine lineIndex */
        lineIndex?: (number|null);

        /** WinLine symbol */
        symbol?: (string|null);

        /** WinLine count */
        count?: (number|null);

        /** WinLine amount */
        amount?: (number|Long|null);
    }

    /** Represents a WinLine. */
    class WinLine implements IWinLine {

        /**
         * Constructs a new WinLine.
         * @param [properties] Properties to set
         */
        constructor(properties?: slot.IWinLine);

        /** WinLine lineIndex. */
        public lineIndex: number;

        /** WinLine symbol. */
        public symbol: string;

        /** WinLine count. */
        public count: number;

        /** WinLine amount. */
        public amount: (number|Long);

        /**
         * Creates a new WinLine instance using the specified properties.
         * @param [properties] Properties to set
         * @returns WinLine instance
         */
        public static create(properties?: slot.IWinLine): slot.WinLine;

        /**
         * Encodes the specified WinLine message. Does not implicitly {@link slot.WinLine.verify|verify} messages.
         * @param message WinLine message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: slot.IWinLine, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified WinLine message, length delimited. Does not implicitly {@link slot.WinLine.verify|verify} messages.
         * @param message WinLine message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: slot.IWinLine, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WinLine message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns WinLine
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): slot.WinLine;

        /**
         * Decodes a WinLine message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns WinLine
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): slot.WinLine;

        /**
         * Verifies a WinLine message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a WinLine message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns WinLine
         */
        public static fromObject(object: { [k: string]: any }): slot.WinLine;

        /**
         * Creates a plain object from a WinLine message. Also converts values to other types if specified.
         * @param message WinLine
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: slot.WinLine, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this WinLine to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for WinLine
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Room. */
    interface IRoom {

        /** Room roomId */
        roomId?: (string|null);

        /** Room roomName */
        roomName?: (string|null);

        /** Room maxPlayers */
        maxPlayers?: (number|null);

        /** Room currentPlayers */
        currentPlayers?: (number|null);

        /** Room minBet */
        minBet?: (number|Long|null);

        /** Room maxBet */
        maxBet?: (number|Long|null);

        /** Room status */
        status?: (string|null);
    }

    /** Represents a Room. */
    class Room implements IRoom {

        /**
         * Constructs a new Room.
         * @param [properties] Properties to set
         */
        constructor(properties?: slot.IRoom);

        /** Room roomId. */
        public roomId: string;

        /** Room roomName. */
        public roomName: string;

        /** Room maxPlayers. */
        public maxPlayers: number;

        /** Room currentPlayers. */
        public currentPlayers: number;

        /** Room minBet. */
        public minBet: (number|Long);

        /** Room maxBet. */
        public maxBet: (number|Long);

        /** Room status. */
        public status: string;

        /**
         * Creates a new Room instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Room instance
         */
        public static create(properties?: slot.IRoom): slot.Room;

        /**
         * Encodes the specified Room message. Does not implicitly {@link slot.Room.verify|verify} messages.
         * @param message Room message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: slot.IRoom, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Room message, length delimited. Does not implicitly {@link slot.Room.verify|verify} messages.
         * @param message Room message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: slot.IRoom, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Room message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Room
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): slot.Room;

        /**
         * Decodes a Room message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Room
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): slot.Room;

        /**
         * Verifies a Room message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Room message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Room
         */
        public static fromObject(object: { [k: string]: any }): slot.Room;

        /**
         * Creates a plain object from a Room message. Also converts values to other types if specified.
         * @param message Room
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: slot.Room, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Room to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Room
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ClientMessage. */
    interface IClientMessage {

        /** ClientMessage type */
        type?: (string|null);

        /** ClientMessage playerId */
        playerId?: (string|null);

        /** ClientMessage roomId */
        roomId?: (string|null);

        /** ClientMessage betAmount */
        betAmount?: (number|Long|null);

        /** ClientMessage bonusType */
        bonusType?: (string|null);
    }

    /** Represents a ClientMessage. */
    class ClientMessage implements IClientMessage {

        /**
         * Constructs a new ClientMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: slot.IClientMessage);

        /** ClientMessage type. */
        public type: string;

        /** ClientMessage playerId. */
        public playerId: string;

        /** ClientMessage roomId. */
        public roomId: string;

        /** ClientMessage betAmount. */
        public betAmount: (number|Long);

        /** ClientMessage bonusType. */
        public bonusType: string;

        /**
         * Creates a new ClientMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ClientMessage instance
         */
        public static create(properties?: slot.IClientMessage): slot.ClientMessage;

        /**
         * Encodes the specified ClientMessage message. Does not implicitly {@link slot.ClientMessage.verify|verify} messages.
         * @param message ClientMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: slot.IClientMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ClientMessage message, length delimited. Does not implicitly {@link slot.ClientMessage.verify|verify} messages.
         * @param message ClientMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: slot.IClientMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ClientMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ClientMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): slot.ClientMessage;

        /**
         * Decodes a ClientMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ClientMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): slot.ClientMessage;

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
        public static fromObject(object: { [k: string]: any }): slot.ClientMessage;

        /**
         * Creates a plain object from a ClientMessage message. Also converts values to other types if specified.
         * @param message ClientMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: slot.ClientMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

        /** ServerMessage room */
        room?: (slot.IRoom|null);

        /** ServerMessage player */
        player?: (slot.IPlayer|null);

        /** ServerMessage spinResult */
        spinResult?: (slot.ISpinResult|null);

        /** ServerMessage errorMessage */
        errorMessage?: (string|null);

        /** ServerMessage availableRooms */
        availableRooms?: (slot.IRoom[]|null);
    }

    /** Represents a ServerMessage. */
    class ServerMessage implements IServerMessage {

        /**
         * Constructs a new ServerMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: slot.IServerMessage);

        /** ServerMessage type. */
        public type: string;

        /** ServerMessage room. */
        public room?: (slot.IRoom|null);

        /** ServerMessage player. */
        public player?: (slot.IPlayer|null);

        /** ServerMessage spinResult. */
        public spinResult?: (slot.ISpinResult|null);

        /** ServerMessage errorMessage. */
        public errorMessage: string;

        /** ServerMessage availableRooms. */
        public availableRooms: slot.IRoom[];

        /**
         * Creates a new ServerMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ServerMessage instance
         */
        public static create(properties?: slot.IServerMessage): slot.ServerMessage;

        /**
         * Encodes the specified ServerMessage message. Does not implicitly {@link slot.ServerMessage.verify|verify} messages.
         * @param message ServerMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: slot.IServerMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ServerMessage message, length delimited. Does not implicitly {@link slot.ServerMessage.verify|verify} messages.
         * @param message ServerMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: slot.IServerMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ServerMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ServerMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): slot.ServerMessage;

        /**
         * Decodes a ServerMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ServerMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): slot.ServerMessage;

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
        public static fromObject(object: { [k: string]: any }): slot.ServerMessage;

        /**
         * Creates a plain object from a ServerMessage message. Also converts values to other types if specified.
         * @param message ServerMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: slot.ServerMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
