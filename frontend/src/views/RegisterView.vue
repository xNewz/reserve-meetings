<template>
  <div class="register container">
    <div class="row">
      <div class="col-md-3"></div>
      <div class="col-md-6">
        <img src="/images/logo.svg" alt="" class="img-logo" />
        <div class="card">
          <div class="card-header">
            <h1>REGISTER</h1>
          </div>
          <div class="card-body">
            <form action="">
              <div class="form-group">
                <label for="">Username</label>
                <input type="text" class="form-control" />
              </div>
              <br />
              <div class="form-group">
                <label for="">Password</label>
                <input type="text" class="form-control" />
              </div>
              <br />
              <div class="form-group">
                <label for="">First name</label>
                <input type="text" class="form-control" />
              </div>
              <br />
              <div class="form-group">
                <label for="">Last name</label>
                <input type="text" class="form-control" />
              </div>
              <br />
              <div class="d-grid gap-2">
                <button type="submit" class="btn btn-success">Register</button>
              </div>
              <br />
              <div class="d-grid gap-2">
                <button type="submit" class="btn btn-secondary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="col-md-3"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.img-logo {
  width: 80%;
  display: block;
  margin: auto;
  margin-top: 15%;
  margin-bottom: 30px;
}

h1 {
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  letter-spacing: 5px;
}

.card {
  margin-bottom: 15%;
}

.card-body {
  padding-left: 10%;
  padding-right: 10%;
}
</style>
