<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <q-page padding class="items-center-justify-center bg-orange">
    <q-card flat class="bg-white q-pa-md">
      <div class="q-pa-md">
        <q-form class="q-gutter-md">

          <div class="q-gutter-md-2 offset-1 col-xs-2" align="center">
            <q-img spinner-color="white" align="center" style="height: 100%; max-width: 90mm" src="~assets/Logo.jpg"> </q-img>
          </div>

          <q-form
            @submit="onSubmit"
            class="q-gutter-md">

            <q-input
              label="Hay Sobat!"
              lazy-rules
              color="purple"
              v-model= "form.userName"
              :rules="[val => val !== null && val !== '' || 'Perlu Di Isi User MU nih']">
              <template v-slot:append>
                <q-icon name="my_location"/>
              </template>
            </q-input>

            <q-input
              label="Harus Kenalan dengan Driver nih, Minta ID :D"
              lazy-rules
              color="purple"
              v-model= "form.idDriver"
              :rules="[val => val !== null && val !== '' || 'Tanya Driver']">
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
              :rules="[val => val !== null && val !== '' || 'Harga Dibutuhkan']">
              <template v-slot:append>
                <q-icon name="edit_location"/>
              </template>
            </q-input>

          </q-form>

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
  data () {
    return {
      form: {
        userName: null,
        idDriver: null,
        jemput: null,
        tujuan: null,
        harga: null
      }
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
