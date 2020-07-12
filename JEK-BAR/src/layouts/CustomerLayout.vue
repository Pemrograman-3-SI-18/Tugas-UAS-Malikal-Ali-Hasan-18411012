<template>
  <q-layout view="lHh Lpr lFf">

    <q-header class="bg-orange-3 text-blue-grey-6">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left" />

        <q-toolbar-title></q-toolbar-title>
        <q-btn flat round dense icon="person" style="font-size: 20px;">
          <q-menu>
            <div class="row no-wrap q-pa-lg">
              <div class="column">
                <q-item-label class="text-h6">Customer</q-item-label>
                <q-linear-progress class="q-mb-lg" :value="100" color="grey-4" style="height: 2px"/>
                <div class="items-center">
                  <div class="text-bold items-center">{{ dataUser.userName }}</div>
                  <div>{{ dataUser.namaLengkap }}</div>
                </div>
              </div>

              <q-separator vertical inset class="q-mx-lg"></q-separator>

              <div class="column items-center">
                <q-btn flat round dense>
                  <q-avatar size="72px">
                    <q-img spinner-color="white"
                           style="height: 100%; max-width: 100%"
                           src="~assets/customer/malikal.jpg"/>
                  </q-avatar>
                </q-btn>

                <div class="text-subtitle1 q-mt-md q-mb-xs"></div>
                <div class="text-subtitle1 q-mt-md q-mb-xs"></div>
                <div class="text-subtitle1 q-mt-md q-mb-xs"></div>
                <q-btn
                  color="purple"
                  label="Sign Out"
                  unelevated
                  @click="keluar()"
                  size="sm"
                  v-close-popup
                  to="/">
                  <q-tooltip>Keluar disini..</q-tooltip>
                </q-btn>
              </div>
            </div>
          </q-menu>
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="left"
      :breakpoint="500"
      show-if-above
      content-class="bg-orange-3 text-teal-10">

      <q-scroll-area class="fit">
        <q-list>
          <q-item style="height: 50px;" class="bg-orange-3 text-bold">
            <q-item-section>
              Aplikasi JEK-BAR (OJEK BARENG)
            </q-item-section>
          </q-item>
          <q-item class="justify-center text-center q-mb-md q-pt-md">
            <div>
              <q-avatar size="100px" class="q-mb-md">
                <q-img spinner-color="white"
                       src="~assets/customer/malikal.jpg"/>
              </q-avatar>
              <div class="text-weight-bold">{{ dataUser.userName }}</div>
              <div>{{ dataUser.namaLengkap }}</div>
            </div>
          </q-item>
          <q-item-label
            header
            class="text-grey-8"
          >
            Menu
          </q-item-label>
          <q-item clickable active-class="active" exact v-ripple to="/customer">
            <q-item-section avatar>
              <q-icon name="work" />
            </q-item-section>
            <q-item-section>
              Order
            </q-item-section>
          </q-item>

          <q-item-label
            header
            class="text-grey-8">
            Transaksi
          </q-item-label>
          <q-item clickable active-class="active" exact v-ripple to="/customer/transaksi">
            <q-item-section avatar>
              <q-icon name="attach_money" />
            </q-item-section>
            <q-item-section>
              Data Transaksi
            </q-item-section>
          </q-item>

        </q-list>
      </q-scroll-area>
    </q-drawer>
    <q-page-container class="bg-grey-2">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

export default {
  name: 'CustomerM',

  data () {
    return {
      left: false,
      dataUser: this.$q.localStorage.getItem('datauser')
    }
  },
  methods: {
    keluar () {
      this.$q.localStorage.clear()
      this.$router.push('/')
    }
  }
}
</script>
