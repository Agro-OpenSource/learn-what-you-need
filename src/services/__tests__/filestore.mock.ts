import { Desk, DeskType } from '../models';
import { FilestoreService } from '@/services/interface/FilestoreService';

class FilestoreMock implements FilestoreService {
  getDeskTypes(): Promise<DeskType[]> {
    return Promise.resolve([]);
  }

  getDesks(): Promise<Desk[]> {
    return Promise.resolve([]);
  }
}
export default FilestoreMock;
