import firebase from 'firebase/app';
import 'firebase/firestore';
import { FilestoreService } from './interface/FilestoreService';
import { Desk, DocRef, DeskType } from '@/services/models';

export default class implements FilestoreService {
  async getDesks(): Promise<Desk[]> {
    const db = firebase.firestore();
    const desksCollection = await db.collection('desks').get();
    const desks = desksCollection.docs.map((d) => {
      const { name, url } = d.data() as Desk;
      const { id, ref } = d;
      return {
        name, id, url, ref,
      };
    });
    return desks;
  }

  async getDeskTypes(deskRef: DocRef): Promise<DeskType[]> {
    const db = firebase.firestore();
    const desksCollection = await db
      .collection('types')
      .where('desk', '==', deskRef)
      .where('key', '==', 'aaa')
      .get();
    const deskTypes = desksCollection.docs.map((d) => {
      const { name } = d.data() as DeskType;
      const { id } = d;
      return { name, id } as DeskType;
    });
    return deskTypes;
  }
}
