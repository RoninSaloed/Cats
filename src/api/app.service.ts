import { LandingResources } from "./app.resources";
import { axiosInstance } from "./axios-instances";

class AppService {
  transport;
  constructor() {
    this.transport = axiosInstance;
  }

  async getFacts(params: {
    limit?: number;
    max_length?: number;
  }): Promise<any> {
    const { data } = await this.transport.get(LandingResources.FACTS, {
      params,
    });

    return data;
  }
}

export default new AppService();
