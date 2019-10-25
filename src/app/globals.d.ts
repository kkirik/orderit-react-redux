import sinon from 'sinon';
import { expect } from 'chai';

declare global {
  namespace NodeJS {
    interface Global {
      document: Document;
      window: Window;
      navigator: Navigator;
      sinon: typeof sinon;
      expect: Chai.ExpectStatic;
    }
  }
}
