import protobuf from "protobufjs";
import { game } from "@/proto/game"; // 假设生成的文件名为 Game.ts

class ProtobufHelper {
  private root: any;
  constructor() {
    this.root = null;
  }

  async loadProtos() {
    try {
      // 假设 Game.proto 文件已放在 src/proto/ 下
      this.root = await protobuf.load("/src/proto/Game.proto");
    } catch (error) {
      console.error("Failed to load proto files:", error);
    }
  }

  // 编码消息
  encodeMessage(messageType: string, data: Uint8Array) {
    const Message = this.root.lookupType(messageType);
    const errMsg = Message.verify(data);
    if (errMsg) throw new Error(errMsg);

    const message = Message.create(data);
    return Message.encode(message).finish();
  }

  // 解码消息
  decodeMessage(messageType: string, buffer: ArrayBuffer) {
    // const message = game.ServerMessage.decode(new Uint8Array(buffer));
    console.log("Decoding message of type:", buffer);
    const Message = this.root.lookupType(messageType);
    const message = Message.decode(new Uint8Array(buffer));
    console.log("message-------", message);
    return game.ServerMessage.toObject(message, {
      longs: String,
      enums: String,
      bytes: String,
    });
  }
}

export default new ProtobufHelper();
