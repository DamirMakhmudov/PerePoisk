const { createApp, ref, reactive, computed, watch } = Vue;
const { Platform, useQuasar, copyToClipboard } = Quasar;

var vueObject = {
  name: 'root',
  template:
    /*html*/
    `
    {{autogrow_}}
    {{mega.comment}}
<q-btn color="white" text-color="black" label="Standard" @click="autogrow_off"/>

<q-layout view="hHh lpR fFf">
  <q-page-container>

    <div class="q-pa-md fit column justify-center">

      <div class="q-gutter-y-xs"> <!--style="height:220px"-->

        <!-- ADDRESS-->
        <q-select v-model="mega.address.val" use-input input-debounce="0" label="Адрес" :options="mega.addressOptions"
          @filter="filteraddressFn" @filter-abort="abortFilterFn" behavior="menu">
          <template v-slot:prepend><q-icon name="location_on"></q-icon></template>
          <template v-slot:no-option>
            <q-item>
              <q-item-section class="text-grey">
                Не нашел такого, ты уверен(а)?
              </q-item-section>
            </q-item>
          </template>
        </q-select>

      </div>

      <!-- OBJECT -->
      <div class="q-gutter-y-xs"> <!--style="height:220px"-->

        <!-- ID -->
        <q-field label="Id" bottom-slots stack-label class="q-pr-md" :dense="true">
          <template v-slot:before><q-icon name="123"></q-icon></template>
          <template v-slot:control>{{mega.id}}</template>
          <!-- <template v-slot:hint>Field hint</template> -->
        </q-field>

        <!-- EMAIL -->
        <q-field label="Email" bottom-slots stack-label class="q-pr-md" :dense="true">
          <template v-slot:before><q-icon name="email"></q-icon></template>
          <template v-slot:control><a :href="'mailto:'+mega.email">{{mega.email}}</a></template>
        </q-field>

        <!-- PHONE -->
        <q-field label="Телефон" bottom-slots stack-label class="q-pr-md" :dense="true">
          <template v-slot:before><q-icon name="phone"></q-icon></template>
          <template v-slot:control><a :href="'tel:'+mega.phone">{{mega.phone}}</a></template>
        </q-field>

        <!-- STATUS -->
        <q-field label="Стадия" bottom-slots stack-label class="q-pr-md" :dense="true">
          <template v-slot:before><q-icon name="flag"></q-icon></template>
          <template v-slot:control>{{mega.status}}</template>
        </q-field>

        <!-- COMMENT -->
        <!-- <div class="q-pa-md" style="height: 100px"> -->
        <!-- <q-input v-model="mega.comment" label="Комментарий" autogrow>
            <template v-slot:prepend>
              <q-icon name="chat" />
            </template>
          </q-input> -->
        <q-input label="Комментарий" v-model="mega.comment" type="textarea" :autogrow="autogrow_" @focus="autogrow_ = true" @blur="autogrow_ = false">
          <template v-slot:prepend>
            <q-icon name="chat" />
          </template>
        </q-input>
        <!-- </div> -->

        <!-- NAME -->
        <q-field label="Имя" bottom-slots stack-label class="q-pr-md" :dense="true">
          <template v-slot:before><q-icon name="flag"></q-icon></template>
          <template v-slot:control>{{mega.status}}</template>
        </q-field>

        <!-- MANAGER -->
        <q-field label="Стадия" bottom-slots stack-label class="q-pr-md" :dense="true">
          <template v-slot:before><q-icon name="flag"></q-icon></template>
          <template v-slot:control>{{mega.status}}</template>
        </q-field>

        <!-- PROJECT_MANAGER -->
        <q-field label="Стадия" bottom-slots stack-label class="q-pr-md" :dense="true">
          <template v-slot:before><q-icon name="flag"></q-icon></template>
          <template v-slot:control>{{mega.status}}</template>
        </q-field>

        <!-- ENGINEER -->
        <q-field label="Стадия" bottom-slots stack-label class="q-pr-md" :dense="true">
          <template v-slot:before><q-icon name="flag"></q-icon></template>
          <template v-slot:control>{{mega.status}}</template>
        </q-field>

        <!-- MEASURER -->
        <q-field label="Стадия" bottom-slots stack-label class="q-pr-md" :dense="true">
          <template v-slot:before><q-icon name="flag"></q-icon></template>
          <template v-slot:control>{{mega.status}}</template>
        </q-field>

        <!-- WORKER -->
        <q-field label="Стадия" bottom-slots stack-label class="q-pr-md" :dense="true">
          <template v-slot:before><q-icon name="flag"></q-icon></template>
          <template v-slot:control>{{mega.status}}</template>
        </q-field>

        <!-- AGREETOR -->
        <q-field label="Стадия" bottom-slots stack-label class="q-pr-md" :dense="true">
          <template v-slot:before><q-icon name="flag"></q-icon></template>
          <template v-slot:control>{{mega.status}}</template>
        </q-field>

        <!-- PROJECT_TYPE -->
        <q-field label="Стадия" bottom-slots stack-label class="q-pr-md" :dense="true">
          <template v-slot:before><q-icon name="flag"></q-icon></template>
          <template v-slot:control>{{mega.status}}</template>
        </q-field>

        <!-- DISTRICT -->
        <q-field label="Стадия" bottom-slots stack-label class="q-pr-md" :dense="true">
          <template v-slot:before><q-icon name="flag"></q-icon></template>
          <template v-slot:control>{{mega.status}}</template>
        </q-field>

        <!-- FOLDER -->
        <q-field label="Стадия" bottom-slots stack-label class="q-pr-md" :dense="true">
          <template v-slot:before><q-icon name="flag"></q-icon></template>
          <template v-slot:control>{{mega.status}}</template>
        </q-field>

      </div>

    </div>

  </q-page-container>
  <!-- <q-tooltip v-model="showing" :no-parent-event="true" :transition-duration=500>{{addr}}</q-tooltip> -->
</q-layout>
`
  ,
  setup() {
    let autogrow_ = ref(false);
    let mega = reactive({
      address: model.address,
      id: model.id,
      email: model.email,
      phone: model.phone,
      status: model.status,
      comment: model.comment,
      name: model.name,
      manager: model.manager,
      project_manager: model.project_manager,
      engineer: model.engineer,
      measurer: model.measurer,
      worker: model.worker,
      agreetor: model.agreetor,
      project_type: model.project_type,
      district: model.district,
      folder: model.folder,
      addressOptions: model.addressOptions
    });
    const $q = useQuasar();

    function autogrow_off() {
      console.log('dd');
      autogrow_ = false;
      let v = mega.comment;
      console.log(v);
      mega.comment = {'v':"s"};
      autogrow_ = false;
      mega.comment = v;
    }

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
      autogrow_,
      mega,
      abortFilterFn,
      filteraddressFn,
      autogrow_off
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