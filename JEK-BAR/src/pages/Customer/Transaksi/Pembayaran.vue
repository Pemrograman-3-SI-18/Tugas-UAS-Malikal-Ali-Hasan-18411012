<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <q-page padding class="items-center-justify-center bg-grey-3">
    <q-card flat class="bg-white q-pa-md">

      <div></div>
      <q-img spinner-color="white" placeholder-src="statics/sembakocanlogin.png" src="statics/sembakocanlogin.png"></q-img>
      <q-space />
      <span class="text-h2 text-weight-light q-pa-md">
        <span class="text-blue-grey-6" >TRANSAKSI SEMBAKOCAN</span>
      </span>
      <div class="q-pa-md">
        <q-form
          @submit="onSubmit"
          class="q-gutter-md"
        >
          <q-input
            label="Hay Sobat!"
            lazy-rules
            color="purple"
            v-model= "form.userName"
            :rules="[val => val !== null && val !== '' || 'Lokasi Penjemputan Dibutuhkan']">
            <template v-slot:append>
              <q-icon name="my_location"/>
            </template>
          </q-input>

          <q-input
            label="Harus Kenalan dengan Driver nih, Minta ID :D"
            lazy-rules
            color="purple"
            v-model= "form.idDriver"
            :rules="[val => val !== null && val !== '' || 'Lokasi Penjemputan Dibutuhkan']">
            <template v-slot:append>
              <q-icon name="my_location"/>
            </template>
          </q-input>

          <q-input
            label="Lokasi Jemput Anda"
            lazy-rules
            color="purple"
            v-model="form.jemput"
            :rules="[val => val !== null && val !== '' || 'Lokasi Penjemputan Dibutuhkan']">
            <template v-slot:append>
              <q-icon name="my_location"/>
            </template>
          </q-input>

          <q-input
            label="Mau Kemana Kita hari ini?"
            lazy-rules
            color="purple"
            v-model="form.tujuan"
            :rules="[val => val !== null && val !== '' || 'Alamat Tujuan Antar Dibutuhkan']">
            <template v-slot:append>
              <q-icon name="edit_location"/>
            </template>
          </q-input>

          <q-input
            label="Harga Perjalanan"
            lazy-rules
            color="purple"
            v-model="form.harga"
            :rules="[val => val !== null && val !== '' || 'Alamat Tujuan Antar Dibutuhkan']">
            <template v-slot:append>
              <q-icon name="edit_location"/>
            </template>
          </q-input>
          <div>
            ANDA YAKIN INGIN LAKUKAN TRANSAKSI???
          </div>

          <div>
            <q-btn
              unelevated
              icon="directions_bike"
              label="Yuk, Berangkat !"
              type="submit"
              style="height: 50px"
              color="purple"/>
            <q-tooltip>Hati Hati Di Perjalanan, Jangan Lupa Berdoa</q-tooltip>

          </div>
        </q-form>
      </div>
    </q-card>
  </q-page>
</template>

<script>
export default {
  name: 'Pembayran',
  data () {
    return {
      form: {
        userName: null,
        idDriver: null,
        jemput: null,
        tujuan: null,
        harga: null
      },

      accept: false
    }
  },
  methods: {
    onSubmit () {
      this.$axios.post('/transaksi/input', {

        userName: this.form.userName,
        idDriver: this.form.idDriver,
        jemput: this.form.jemput,
        tujuan: this.form.tujuan,
        harga: this.from.harga
      })
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
            this.$router.push('/customer/transaksi')
          }
        })
    },

    onReset () {
      this.name = null
      this.age = null
      this.accept = false
    }
  }
}
</script>

<style scoped>

</style>
