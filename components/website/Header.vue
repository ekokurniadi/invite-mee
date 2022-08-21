<template>
  <section class="header">
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container">
        <a class="navbar-brand" href="#">
          <img src="assets/images/rings.gif" alt="" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <Nuxt-link class="nav-link" to="/"
                >Home <span class="sr-only">(current)</span></Nuxt-link
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </section>
</template>
