<template>
  <q-page >
    <div class="q-pa-md">
      <q-table
        title="Treats"
        :data="data"
        :columns="columns"
        row-key="id"
        :filter="filter"
        :loading="loading"
      >

        <template v-slot:top>
          <q-btn color="teal" :disable="loading" label="Tambah Data Driver" to="/inputdata" />
          <!-- <q-btn class="q-ml-sm" color="primary" :disable="loading" label="Remove row" @click="removeRow" /> -->
          <q-space />
          <q-input borderless dense debounce="300" color="primary" v-model="filter">
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </template>

        <template v-slot:body="props">
          <q-tr :props="props">
            <q-td key="idDriver" :props="props">
              {{ props.row.idDriver }}
            </q-td>
            <q-td key="nama" :props="props">{{ props.row.nama }}</q-td>
            <q-td key="noTelpon" :props="props">{{ props.row.noTelpon }}</q-td>
            <q-td key="jeniskendaraan" :props="props">{{ props.row.jeniskendaraan }}</q-td>
            <q-td key="kodeKendaraan" :props="props">{{ props.row.kodeKendaraan }}</q-td>
            <q-td key="gambar" :props="props">
              <q-img :src="baseUrl + props.row.gambar" style="width: 50px; height: 50px"/>
            </q-td>
            <q-td key="action" :props="props">
              <div class="justify-center q-gutter-x-xs">
                <q-btn color="teal"
                       dense size="sm"
                       class="q-px-xs"
                       icon="edit"
                       @click="edit(props.row.idDriver)"
                       label="Edit"></q-btn>
                <q-btn
                  color="red"
                  dense
                  size="sm"
                  @click="hapusDataDriver(props.row._id)"
                  class="q-px-xs"
                  icon="delete"
                  label="Hapus"></q-btn>
              </div>
            </q-td>
          </q-tr>
        </template>

      </q-table>
    </div>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      baseUrl: 'http://localhost:3131/gambar/',
      loading: false,
      filter: '',
      rowCount: 10,
      columns: [
        {
          name: 'idDriver',
          required: true,
          label: 'ID Driver',
          align: 'left',
          field: row => row.idDriver,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'nama', align: 'center', label: 'Nama Driver', field: 'nama', sortable: true },
        { name: 'noTelpon', align: 'center', label: 'No Telephon', field: 'noTelpon', sortable: true },
        { name: 'jeniskendaraan', label: 'Jenis Kendaraan', align: 'center', field: 'jeniskendaraan' },
        { name: 'kodeKendaraan', label: 'Kode Kendaraan', align: 'center', field: 'kodeKendaraan' },
        { name: 'gambar', label: 'Gambar', align: 'center', field: 'gambar' },
        { name: 'action', align: 'center', label: 'Action', field: 'action', sortable: true }
      ],

      data: []
    }
  },

  methods: {
    // emulate fetching data from server
    getDataDriver () {
      this.$axios.get('/driver/datadriver')
        .then((res) => {
          this.data = res.data.data
        })
    },
    hapusDataDriver (_id) {
      this.$axios.delete('/driver/hapus/' + _id)
        .then((res) => {
          this.$q.notify({
            color: 'positive',
            message: 'Barhasil Menghapus Data'
          })
          this.getDataDriver()
        })
    },
    edit (idDriver) {
      this.$router.push('/editdata/' + idDriver)
    }
  },
  mounted () {
    this.getDataDriver()
  }
}
</script>
