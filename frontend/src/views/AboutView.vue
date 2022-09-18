<template>
  <div class="about text-center">
    <h1>This is an about page</h1>
    <div class="dropdown">
      <button
        class="btn btn-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Dropdown button
      </button>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        <li><a class="dropdown-item" href="#">Something else here</a></li>
      </ul>
    </div>
    <br />
    <div>
      <button
        type="button"
        class="btn btn-secondary"
        data-bs-container="body"
        data-bs-toggle="popover"
        data-bs-placement="top"
        data-bs-content="Top popover"
      >
        Popover on top
      </button>
      <button
        type="button"
        class="btn btn-secondary"
        data-bs-container="body"
        data-bs-toggle="popover"
        data-bs-placement="right"
        data-bs-content="Right popover"
      >
        Popover on right
      </button>
      <button
        type="button"
        class="btn btn-secondary"
        data-bs-container="body"
        data-bs-toggle="popover"
        data-bs-placement="bottom"
        data-bs-content="Bottom popover"
      >
        Popover on bottom
      </button>
      <button
        type="button"
        class="btn btn-secondary"
        data-bs-container="body"
        data-bs-toggle="popover"
        data-bs-placement="left"
        data-bs-content="Left popover"
      >
        Popover on left
      </button>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    $('[data-bs-toggle="popover"]').popover();
  },
};
</script>

<style>
button {
  margin: 10px;
}
</style>
