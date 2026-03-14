import { ref, watch } from "vue";
import { ProtobufHelper } from "@/utils/slot";
import type { ClientMessage, ServerMessage } from "@/type/slotgame";

class WebSocketService {
  private ws: WebSocket | null = null;
  private messageHandlers: ((message: ServerMessage) => void)[] = [];
  private reconnectAttempts = 0;
  private maxReconnectAttempts = 5;

  public connectionStatus = ref<
    "disconnected" | "connecting" | "connected" | "error"
  >("disconnected");

  constructor(private url: string) {}

  /**
   * 连接 WebSocket
   */
  connect(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.connectionStatus.value = "connecting";

      try {
        this.ws = new WebSocket(this.url);
        this.ws.binaryType = "arraybuffer";

        this.ws.onopen = () => {
          this.connectionStatus.value = "connected";
          this.reconnectAttempts = 0;
          resolve();
        };

        this.ws.onmessage = (event) => {
          this.handleMessage(event.data);
        };

        this.ws.onclose = () => {
          this.connectionStatus.value = "disconnected";
          this.handleReconnect();
        };

        this.ws.onerror = () => {
          this.connectionStatus.value = "error";
          reject(new Error("WebSocket connection failed"));
        };
      } catch (error) {
        this.connectionStatus.value = "error";
        reject(error);
      }
    });
  }

  /**
   * 发送消息
   */
  send(message: ClientMessage): void {
    if (!this.ws || this.ws.readyState !== WebSocket.OPEN) {
      throw new Error("WebSocket is not connected");
    }

    const encodedMessage = ProtobufHelper.encodeMessage(
      "slot.ClientMessage",
      message
    );
    this.ws.send(encodedMessage);
  }

  /**
   * 添加消息处理器
   */
  onMessage(handler: (message: ServerMessage) => void): void {
    this.messageHandlers.push(handler);
  }

  /**
   * 移除消息处理器
   */
  offMessage(handler: (message: ServerMessage) => void): void {
    const index = this.messageHandlers.indexOf(handler);
    if (index > -1) {
      this.messageHandlers.splice(index, 1);
    }
  }

  /**
   * 断开连接
   */
  disconnect(): void {
    if (this.ws) {
      this.ws.close();
      this.ws = null;
    }
    this.connectionStatus.value = "disconnected";
  }

  /**
   * 处理接收到的消息
   */
  private handleMessage(data: ArrayBuffer): void {
    try {
      const message = ProtobufHelper.decodeMessage(data) as ServerMessage;
      this.messageHandlers.forEach((handler) => handler(message));
    } catch (error) {
      console.error("Failed to decode message:", error);
    }
  }

  /**
   * 处理重连逻辑
   */
  private handleReconnect(): void {
    if (this.reconnectAttempts < this.maxReconnectAttempts) {
      this.reconnectAttempts++;
      setTimeout(() => {
        this.connect().catch(console.error);
      }, 1000 * this.reconnectAttempts);
    }
  }
}

export const websocketService = new WebSocketService(
  "ws://localhost:9502/slotgame"
);
