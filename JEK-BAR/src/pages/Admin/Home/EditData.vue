<template>
  <q-page padding class="items-center-justify-center bg-grey-3">
    <q-card flat class="bg-white q-pa-md">
      <span class="text-h5 text-weight-light q-pa-md">
        <span class="text-blue-grey-14">Edit Data Driver</span>
      </span>
      <div class="q-pa-md">
        <q-form
          @submit="onSubmit"
          class="q-gutter-md"
        >

          <q-input
            label="ID Driver"
            lazy-rules
            color="teal"
            v-model="form.idDriver"
            :rules="[
           val => val !== null && val !== '' || 'ID Driver Dibutuhkan'
           ]">
            <template v-slot:append>
              <q-icon name="dns"/>
            </template>
          </q-input>

          <q-input
            label="Nama Driver"
            lazy-rules
            color="teal"
            v-model="form.nama"
            :rules="[
           val => val !== null && val !== '' || 'Nama Driver Dibutuhkan'
           ]">
            <template v-slot:append>
              <q-icon name="title"/>
            </template>
          </q-input>

          <q-input
            label="No Telephone"
            lazy-rules
            color="teal"
            v-model="form.noTelpon"
            :rules="[
           val => val !== null && val !== '' || 'No Telephone Dibutuhkan'
           ]">
            <template v-slot:append>
              <q-icon name="menu_book"/>
            </template>
          </q-input>

          <q-input
            label="Jenis Kendaraan"
            lazy-rules
            color="teal"
            v-model="form.jenisKendaraan"
            :rules="[
           val => val !== null && val !== '' || 'Jenis Kendaraan Dibutuhkan'
           ]">
            <template v-slot:append>
              <q-icon name="person"/>
            </template>
          </q-input>

          <q-input
            label="Kode Kendaraan"
            lazy-rules
            color="teal"
            v-model="form.kodeKendaraan"
            :rules="[
           val => val !== null && val !== '' || 'Kode Kendaraan Dibutuhkan'
           ]">
            <template v-slot:append>
              <q-icon name="calendar_today"/>
            </template>
          </q-input>

          <q-img :src="baseUrl + this.gambar" style="width: 250px; height: 250px"/>
          <q-toggle v-model="gangtiGambar" label="Ganti Gambar ?" />
          <q-input
            lazy-rules
            hint="Pilih gambar"
            type="file"
            ref="file"
            v-if="gangtiGambar == true"
            @input="selectFile()"
            color="teal"
            :rules="[
           val => val !== null && val !== '' || 'Gambar Dibutuhkan'
           ]">
            <template v-slot:append>
              <q-icon name="add_photo_alternate"/>
            </template>
          </q-input>

          <div>
            <q-btn
              unelevated
              icon="add"
              label="Ubah Data Driver"
              style="height: 50px"
              type="submit"
              color="teal-6"/>
          </div>
        </q-form>
      </div>
    </q-card>
  </q-page>
</template>

<script>
export default {
  name: 'EditDataDriver',
  data () {
    return {
      gangtiGambar: false,
      baseUrl: 'http://localhost:3131/gambar/',
      form: {
        idDriver: null,
        namau: null,
        noTelpon: null,
        jenisKendaraan: null,
        kodeKendaraan: null
      },
      id: null,
      gambar: null
    }
  },
  methods: {
    selectFile () {
      this.gambar = this.$refs.file.$refs.input.files[0]
    },

    onSubmit () {
      const formData = new FormData()
      formData.append('gambar', this.gambar)
      formData.append('idDriver', this.form.idDriver)
      formData.append('nama', this.form.nama)
      formData.append('noTelpon', this.form.noTelpon)
      formData.append('jenisKendaraan', this.form.jenisKendaraan)
      formData.append('kodeKendaraan', this.form.kodeKendaraan)
      this.$axios.put('/driver/ubah/' + this.id, formData)
        .then((res) => {
          if (res.data.error) {
            this.$q.notify({
              color: 'negative',
              message: res.data.msg,
              icon: 'ion-close'
            })
          } else {
            this.$q.notify({
              color: 'positive',
              message: res.data.msg,
              icon: 'ion-close'
            })
            this.$router.push('/admin')
          }
        })
    },

    getDataDriver () {
      this.$axios.get('/driver/datadriver/' + this.$route.params.idDriver)
        .then((res) => {
          this.data = res.data.data
          this.form.idDriver = this.data.idDriver
          this.form.nama = this.data.nama
          this.form.jenisKendaraan = this.data.jenisKendaraan
          this.form.kodeKendaraan = this.data.kodeKendaraan
          this.form.noTelpon = this.data.noTelpon
          this.gambar = this.data.gambar
          this.id = this.data._id
        })
    }
  },

  mounted () {
    this.getDataDriver()
  }
}
</script>

<style scoped>

</style>
