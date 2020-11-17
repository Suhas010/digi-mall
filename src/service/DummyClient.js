import Interceptor from "./Interceptor";

class Client extends Interceptor {
  constructor(props) {
    super(props || "http://localhost:3001");
  }
  GET(url, config) {
    return this._GET(url, config);
  }
}

const DummyClient = new Client();

export default DummyClient;
