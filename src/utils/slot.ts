import { encode, decode } from "@msgpack/msgpack";
import { slot } from "@/proto/slotgame";
import * as slot1 from "@/proto/SlotGame_pb";
export class ProtobufHelper {
  /**
   * 编码消息
   */
  static encodeMessage(messageType: string, data: any): Uint8Array {
    switch (messageType) {
      case "Slot\\ClientMessage":
        return ProtobufHelper.encodeSlotMessage(messageType, data);
    }
    throw new Error(`Unsupported message type: ${messageType}`);
  }
  static encodeSlotMessage(messageType: string, data: any): Uint8Array {
    const message = slot.ClientMessage.create(data);
    const protoData = slot.ClientMessage.encode(message).finish();
    // return protoData;
    const wrappedData = {
      type: messageType,
      data: Array.from(protoData),
    };
    return encode(wrappedData);
  }

  /**
   * 解码消息
   */
  static decodeMessage(buffer: ArrayBuffer): any {
    const decoded = decode(new Uint8Array(buffer)) as any;
    if (!decoded.type || !decoded.data) {
      throw new Error("Invalid MsgPack format");
    }
    console.log("Decoded MsgPack:", decoded.data);

    const message = new Uint8Array(decoded.data);
    // 将decoded.data转换为arraybuffer

    // 将message转换为arraybuffer
    switch (decoded.type) {
      case "Slot\\ServerMessage":
        const data = slot1.ServerMessage.deserializeBinary(decoded.data);
        return data.toObject();
        return ProtobufHelper.decodeSlotMessage(message);
    }
    throw new Error(`Unsupported message type: ${decoded.type}`);
  }
  static decodeSlotMessage(buffer: Uint8Array): any {
    return slot.ServerMessage.toObject(slot.ServerMessage.decode(buffer), {
      longs: String,
      enums: String,
      bytes: String,
    });
  }
}
