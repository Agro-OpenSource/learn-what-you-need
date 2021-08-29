import factory from './__factory';
import Navigation from '@/views/Navigation/Index.vue';
import FirebaseMock from '@/services/__tests__/firebase.mock';
import NavigationStore from '@/stores/NavigationStore';

const firebaseMock = new FirebaseMock();

const createComponent = () => {
  const component = factory(Navigation, firebaseMock);
  return component;
};

describe('views/Navigation/Index.vue', () => {
  it('Check is not authorized on start', () => {
    const wrap = createComponent();
    const vm = wrap.vm as Vue & { ds: NavigationStore };
    const { ds } = vm;

    expect(wrap.vm).toBeInstanceOf(Object);
    expect(ds.getIsAuthorized).toBeFalsy();
  });
  it('Check is authorized after login', async () => {
    const wrap = createComponent();
    const vm = wrap.vm as Vue & { ds: NavigationStore, login: (mode: {email: string, password: string}) => void};
    const ds = vm.ds as NavigationStore;
    ds.login({ email: '', password: '' });

    expect(ds.getIsAuthorized).toBeTruthy();
  });
  it('Check is not authorized after logout', async () => {
    const wrap = createComponent();
    const vm = wrap.vm as Vue & { ds: NavigationStore, logout: () => void};
    const { ds } = vm;
    ds.login({ email: '', password: '' });
    await vm.$nextTick();
    vm.logout();
    await vm.$nextTick();
    expect(ds.getIsAuthorized).toBeFalsy();
  });
});
