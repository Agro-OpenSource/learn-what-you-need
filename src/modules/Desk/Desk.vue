<template>
  <b-container>
    <b-row>
      <b-col cols="12" class="p-2 text-center">
        <h1>Desk - {{ deskName }}</h1>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="12" class="p-2 text-center">
        <div class="d-flex justify-content-around">
          <b-button class="w-25" @click="() => navigateLearn()">
            Learn
          </b-button>
          <b-button class="w-25" @click="() => navigateEdit()">
            Edit
          </b-button>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import { provide, consume } from 'provide-consume-decorator';
import { getModule } from 'vuex-module-decorators';
import FilestoreStore from '@/stores/FilestoreStore';

@Component
@provide({
  // provide a data store
  /* istanbul ignore next */
  filestoreStore() {
    return getModule(FilestoreStore, this.$store);
  },
})
export default class Desk extends Vue {
  @consume('filestoreStore') fbs!: FilestoreStore;

  public get deskUrl() : string {
    return this.$route.params.url;
  }

  public get deskName() : string {
    return (this.fbs.Desk || { name: '' }).name;
  }

  public get deskNotExist() : boolean {
    return this.fbs.DeskNotExist;
  }

  public async created() : Promise<void> {
    await this.fbs.setDeskUrl(this.deskUrl);
  }

  // Event
  public navigateLearn() : void {
    // TODO: Implement learn
    this.$bvModal.msgBoxOk('Learn in not implement yet');
  }

  public navigateEdit() : void {
    const urlEdit = `/desk/${this.deskUrl}/edit`;
    this.$router.push(urlEdit);
  }

  @Watch('deskNotExist')
  public watchDeskNotExist(newValue: boolean) : void {
    if (newValue) {
      this.$router.push('');
    }
  }
}
</script>
