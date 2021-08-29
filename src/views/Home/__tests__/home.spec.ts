import factory from './__factory';
import Home from '@/moviewsdules/Home/Index.vue';
import { FirebaseMock, FilestoreMock } from '@/services/__tests__';
import HomeProps from '@/views/Home/types/HomeProps';

const firebaseMock = new FirebaseMock();
const filestoreMock = new FilestoreMock();

const createComponent = () => {
  const component = factory(Home, firebaseMock, filestoreMock) as unknown as { vm: Vue & HomeProps};
  return component;
};

describe('views/Home/Index.vue', () => {
  it('Check Vue component is created', async () => {
    const wrap = createComponent();
    const vm = wrap.vm as HomeProps;
    const { ds } = vm;
    await wrap.vm.$nextTick();

    expect(wrap.vm).toBeInstanceOf(Object);
    expect(ds?.getIsAuthorized).toBeFalsy();
    expect(vm.userName).toBe('');
  });

  it('Check VueStore NavigationStore exist', async () => {
    const wrap = createComponent();
    const vm = wrap.vm as HomeProps;
    const { ds } = vm;
    expect(ds).toBeInstanceOf(Object);
  });
  it('Check VueStore FilestoreStore exist', async () => {
    const wrap = createComponent();
    const vm = wrap.vm as HomeProps;
    const { fbs } = vm;
    expect(fbs).toBeInstanceOf(Object);
  });
});
