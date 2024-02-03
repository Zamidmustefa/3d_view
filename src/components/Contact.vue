<template>
    <div>
        <div class="header">
            <img src="../../public/logo.png" width="240px" style="margin-bottom: 20px" alt="" />
            <ul class="menu">
                <li><a href="/">Home</a></li>
                <li><a href="/upload">Upload your design</a></li>
                <li><a href="/about">About Us</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </div>
        <br />
        <div>
            <h4>Contact us</h4>

            <!-- Vue Contact Form Component -->
            <div class="contact-form">
                <form @submit.prevent="submitForm">
                    <label for="name">Name:</label>
                    <input type="text" id="name" v-model="formData.name" required>

                    <label for="email">Email:</label>
                    <input type="email" id="email" v-model="formData.email" required>

                    <label for="message">Message:</label>
                    <textarea id="message" v-model="formData.message" rows="4" required></textarea>

                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "contact",
    data() {
        return {
            formData: {
                name: '',
                email: '',
                message: ''
            }
        };
    },
    methods: {
        submitForm() {
            // You can handle the form submission logic here
            console.log('Form submitted:', this.formData);
            // For demo purposes, you can reset the form data
            this.formData = {
                name: '',
                email: '',
                message: ''
            };
        }
    }
};
</script>

<style>
.menu {
    display: flex;
    list-style-type: none;
}

.menu>li {
    margin-right: 30px;
}

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.contact-form {
    margin-top: 20px;
}

label {
    display: block;
    margin-bottom: 8px;
}

input,
textarea {
    width: 100%;
    padding: 8px;
    margin-bottom: 15px;
    border: 1px solid #ddd;
    border-radius: 5px;
}

button {
    background-color: #3498db;
    color: #fff;
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}
</style>
