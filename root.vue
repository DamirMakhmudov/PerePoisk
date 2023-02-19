const { createApp, ref, reactive, computed, watch } = Vue;
const { Platform, useQuasar, copyToClipboard } = Quasar;

var vueObject = {
name: 'root',
template:
/*html*/
`
<q-layout view="hHh lpR fFf">
  <q-page-container>

    <div class="q-pa-md fit column justify-center">
      <div class="q-gutter-y-xs" style="height:220px">

        <!-- address-->
        <q-select v-model="mega.address.val" use-input input-debounce="0" label="Адрес" :options="mega.addressOptions"
          @filter="filteraddressFn" @filter-abort="abortFilterFn" behavior="menu">
          <template v-slot:prepend>
            <q-icon name="location_on" />
          </template>
          <template v-slot:no-option>
            <q-item>
              <q-item-section class="text-grey">
                Не нашел такого, ты уверен(а)?
              </q-item-section>
            </q-item>
          </template>
        </q-select>

        <q-field color="purple-12" label="Label" stack-label>
          <template v-slot:prepend><q-icon name="event"></q-icon></template>
          <template v-slot:control><div class="self-center full-width no-outline" tabindex="0">{{text}}</div></template>
        </q-field>

      </div>
    </div>

  </q-page-container>
  <!-- <q-tooltip v-model="showing" :no-parent-event="true" :transition-duration=500>{{addr}}</q-tooltip> -->
</q-layout>
`
,
setup() {
let mega = reactive({
address: model.address,
addressOptions: model.addressOptions
});
const $q = useQuasar();

function filteraddressFn(val, update) {
if (val === '') {
update(() => {
mega.addressOptions = model.addressOptions;
})
return;
}
update(() => {
const needle = val.toLowerCase()
mega.addressOptions = model.addressOptions.filter(v => {
let arneed = needle.split(' ');
if (arneed.every(ar => v.address.toLowerCase().includes(ar))) {
return v
}
});

})
}

function abortFilterFn() {
console.log('delayed filter aborted')
}

return {
mega,
abortFilterFn,
filteraddressFn
}
}
}

const app = Vue.createApp(vueObject);
app.use(Quasar, {
config: {
notify: { timeout: 500 },
loading: { /* look at QuasarConfOptions from the API card */ },
plugins: ['Meta']
}
});

Quasar.lang.set(Quasar.lang.ru);