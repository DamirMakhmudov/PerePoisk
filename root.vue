const { createApp, ref, reactive, computed, watch } = Vue;
const { Platform, useQuasar, copyToClipboard } = Quasar;

var vueObject = {
  name: 'root',
  template:
    /*html*/
    `
<!-- <q-btn color="white" text-color="black" label="Standard" @click="" /> -->

<q-layout view="hHh lpR fFf">

  <q-page-container>

    <div class="q-pa-md fit column">

        <!-- ADDRESS-->
        <q-select @update:model-value="vall => gueryBQ(vall)" v-model="mega.address.val" use-input input-debounce="0" label="Адрес" :options="mega.addressOptions" @filter="filteraddressFn" @filter-abort="abortFilterFn" behavior="menu">
          <template v-slot:prepend><q-icon name="location_on" @click.native="openUrl('https://yandex.ru/maps/?source=serp_navig&text='+mega.address.val)"></q-icon></template>
          <template v-slot:no-option>
            <q-item>
              <q-item-section class="text-grey">
                Не нашел такого, ты уверен(а)?
              </q-item-section>
            </q-item>
          </template>
        </q-select>


      <!-- OBJECT -->
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
          <q-input label="Комментарий" v-model="mega.comment" :autogrow="autogrow_" @focus="autogrow_=true" @blur="autogrow_=false">
            <template v-slot:prepend>
              <q-icon name="chat" />
            </template>
          </q-input>

        <!-- NAME -->
        <q-field label="Имя" bottom-slots stack-label class="q-pr-md" :dense="true">
          <template v-slot:before><q-icon name="face"></q-icon></template>
          <template v-slot:control>{{mega.name}}</template>
        </q-field>

        <!-- MANAGER -->
        <q-field label="Менеджер" bottom-slots stack-label class="q-pr-md" :dense="true">
          <template v-slot:before><q-icon name="person"></q-icon></template>
          <template v-slot:control>{{mega.manager}}</template>
        </q-field>

        <!-- PROJECT_MANAGER -->
        <q-field label="Проектный менеджер" bottom-slots stack-label class="q-pr-md" :dense="true">
          <template v-slot:before><q-icon name="record_voice_over"></q-icon></template>
          <template v-slot:control>{{mega.project_manager}}</template>
        </q-field>

        <!-- ENGINEER -->
        <q-field label="Инженер" bottom-slots stack-label class="q-pr-md" :dense="true">
          <template v-slot:before><q-icon name="manage_accounts"></q-icon></template>
          <template v-slot:control>{{mega.engineer}}</template>
        </q-field>

        <!-- MEASURER -->
        <q-field label="Обмерщик" bottom-slots stack-label class="q-pr-md" :dense="true">
          <template v-slot:before><q-icon name="person_search"></q-icon></template>
          <template v-slot:control>{{mega.measurer}}</template>
        </q-field>

        <!-- WORKER -->
        <q-field label="Исполнитель" bottom-slots stack-label class="q-pr-md" :dense="true">
          <template v-slot:before><q-icon name="person_4"></q-icon></template>
          <template v-slot:control>{{mega.worker}}</template>
        </q-field>

        <!-- AGREETOR -->
        <q-field label="Согласователь" bottom-slots stack-label class="q-pr-md" :dense="true">
          <template v-slot:before><q-icon name="handshake"></q-icon></template>
          <template v-slot:control>{{mega.agreetor}}</template>
        </q-field>

        <!-- PROJECT_TYPE -->
        <q-field label="Тип" bottom-slots stack-label class="q-pr-md" :dense="true">
          <template v-slot:before><q-icon name="grid_view"></q-icon></template>
          <template v-slot:control>{{mega.project_type}}</template>
        </q-field>

        <!-- DISTRICT -->
        <q-field label="Округ" bottom-slots stack-label class="q-pr-md" :dense="true">
          <template v-slot:before><q-icon name="layers"></q-icon></template>
          <template v-slot:control>{{mega.district}}</template>
        </q-field>

        <!-- FOLDER -->
        <q-field label="Папка" bottom-slots stack-label class="q-pr-md" :dense="true">
          <template v-slot:before><q-icon name="folder" @click.native="openUrl(mega.folder)"></q-icon></template>
          <!-- <template v-slot:control>{{mega.folder}}</template> -->
        </q-field>
 
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

    function openUrl(url) {
      window.open(url);
    }

    function address_selected(vall) {
      gueryBQ(vall.label);
    }

    async function gueryBQ(address) {
      console.log(address);
      await getAccessToken();
      let request = {
        "query": "SELECT id, email, phone, status, comment, name, manager, project_manager, engineer, measurer, worker, agreetor, project_type, district, folder FROM `avocado-368421.pereplan.pereplan_table` where address ='" + address.label + "';",
        "useLegacySql": false
      };
      let url = 'https://bigquery.googleapis.com/bigquery/v2/projects/avocado-368421/queries';
      let res = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${at}`
        },
        body: JSON.stringify(request)
      })
        .then(response => response.json());

      let rows = res.rows[0].f;
      let arr = rows.map(item => item.v);

      mega.id = arr[0];
      mega.email = arr[1];
      mega.phone = arr[2];
      mega.status = arr[3];
      mega.comment = arr[4];
      mega.name = arr[5];
      mega.manager = arr[6];
      mega.project_manager = arr[7];
      mega.engineer = arr[8];
      mega.measurer = arr[9];
      mega.worker = arr[10];
      mega.agreetor = arr[11];
      mega.project_type = arr[12];
      mega.district = arr[13];
      mega.folder = arr[14];
    }

    return {
      autogrow_,
      mega,
      abortFilterFn,
      filteraddressFn,
      openUrl,
      address_selected,
      gueryBQ
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