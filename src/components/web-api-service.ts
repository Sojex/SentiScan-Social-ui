import axios from 'axios';
import { SentiScanMessage } from './model';

const BASE_URL = 'https://localhost:7043';

export const webApiService = {
  async sendMessage(data: SentiScanMessage): Promise<SentiScanMessage> {
    const response = await axios.post<SentiScanMessage>(BASE_URL, data);
    return response.data;
  },

  async getAllMessages(): Promise<SentiScanMessage[]> {
    const url = `${BASE_URL}/senti-scan/list-messages`;
    const response = await axios.get<SentiScanMessage[]>(url);
    return response.data;
  }
};