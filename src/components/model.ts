export interface SentiScanSentiment {
  sentimentType?: string;
  calculationFeedback?: string;
};

export interface SentiScanMessage {
    id: number;
    senderId?: number;
    receiverId?: number;
    messageContent?: string;
};