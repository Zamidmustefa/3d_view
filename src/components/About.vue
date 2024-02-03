<template>
  <div>
    <div class="header">
      <img
        src="../../public/logo.png"
        width="240px"
        style="margin-bottom: 20px"
        alt=""
      />
      <ul class="menu">
        <li><a href="/">Home</a></li>
        <li><a href="/upload">Upload your design</a></li>
        <li><a href="/about">About Us</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </div>
    <br />
    <div>
      <h4>About us</h4>

      <section style="margin-top: 40px;">
        <h2>Welcome to Online 3D Viewer</h2>

        <p>
          At Online 3D Viewer, we are passionate about delivering an immersive
          and captivating 3D experience. Our mission is to push the boundaries
          of technology to provide users with a visually stunning and
          interactive journey into the world of three-dimensional graphics.
        </p>

        <h2>Who We Are</h2>

        <p>
          We are a team of dedicated professionals, including designers,
          developers, and 3D artists, united by a common vision of transforming
          digital experiences. Our expertise lies in creating realistic and
          dynamic 3D environments that engage and captivate audiences.
        </p>

        <h2>Our Vision</h2>

        <p>
          Our vision is to revolutionize the way people perceive and interact
          with digital content. Whether you are a gaming enthusiast, an
          architect exploring designs, or simply someone seeking a new and
          exciting visual experience, our 3D view website is designed to cater
          to your curiosity and imagination.
        </p>

        <h2>What Sets Us Apart</h2>

        <p>
          What distinguishes us from the rest is our commitment to excellence
          and innovation. We leverage cutting-edge technologies to ensure that
          every user gets a seamless and enjoyable 3D experience. Our team
          continuously explores new possibilities and stays at the forefront of
          advancements in the world of 3D graphics.
        </p>

        <h2>Contact Us</h2>

        <p>
          Ready to embark on a 3D adventure? Contact us today to learn more
          about our services, explore partnership opportunities, or simply share
          your thoughts. We look forward to hearing from you and sharing the
          excitement of the 3D world we've created.
        </p>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "about",
};
</script>
<style>
.menu {
  display: flex;
  list-style-type: none;
}

.menu > li {
  margin-right: 30px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
