import deskProp from '../types/deskProp';
import factory from './__factory';
import { FilestoreMock } from '@/services/__tests__';
import DeskVue from '@/views/Desk/Desk.vue';

const filestoreMock = new FilestoreMock();

const createComponent = () => {
  const component = factory(DeskVue, filestoreMock);
  return component;
};

describe('views/Desk/Index.vue', () => {
  it('Check Vue component is created', async () => {
    const wrap = createComponent();
    const vm = wrap.vm as deskProp & Vue;
    await vm.$nextTick();

    expect(vm).toBeInstanceOf(Object);
    expect(vm.fbs).toBeInstanceOf(Object);
  });
});
