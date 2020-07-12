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

          <q-btn color="purple" :disable="loading"
                 label="Edit Data"
                 icon="edit"/>

          <q-btn color="purple" :disable="loading"
                 label="Hapus Data"
                 class="offset-1"
                 icon="delete"/>

          <q-btn color="purple" :disable="loading"
                 label="Refresh"
                 class="offset-1"
                 icon="cached"/>

          <q-space />
          Masukan data :
          <q-input borderless dense debounce="300" color="blue-grey" v-model="filter">
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </template>
        <template v-slot:body="props">
          <q-tr :props="props">
            <q-td key="userName" :props="props">
              {{ props.row.userName }}
            </q-td>
            <q-td key="idDriver" :props="props">{{ props.row.idDriver }}</q-td>
            <q-td key="jemput" :props="props">{{ props.row.jemput }}</q-td>
            <q-td key="tujuan" :props="props">{{ props.row.tujuan }}</q-td>
            <q-td key="harga" :props="props">{{ props.row.harga }}</q-td>

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
      loading: false,
      filter: '',
      rowCount: 10,
      columns: [
        {
          name: 'userName',
          required: true,
          label: 'User Name',
          align: 'left',
          field: row => row.userName,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'idDriver', align: 'center', label: 'ID Driver', field: 'idDriver', sortable: true },
        { name: 'jemput', align: 'center', label: 'Penjemputan', field: 'jemput', sortable: true },
        { name: 'tujuan', align: 'center', label: 'Tujuan Antar', field: 'tujuan', sortable: true },
        { name: 'harga', align: 'center', label: 'Harga Perjalanan', field: 'harga', sortable: true }
      ],
      data: []
    }
  },
  methods: {
    // emulate fetching data from server
    getDataTransaksi () {
      this.$axios.get('/transaksi/datatransaksi/')
        .then((res) => {
          this.data = res.data.data
        })
    }
  },

  mounted () {
    this.getDataTransaksi()
  }
}
</script>

<style scoped>

</style>
