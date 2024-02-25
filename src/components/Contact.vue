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
                    <input type="text" id="name" v-model="formData.name" @keypress="validateName" required>

                    <label for="email">Email:</label>
                    <input type="email" id="email" v-model="formData.email" required>

                    <label for="message">Message:</label>
                    <textarea id="message" v-model="formData.message" rows="4" required></textarea>

                    <button v-if="!load" type="submit">Submit</button>
                    <button v-if="load" type="disabled">Sending</button>
                </form>
            </div>
            <div v-if="submitted" style="margin-top: 12px;">Contact Form submitted successfully</div>
        </div>
    </div>
</template>

<script>
import { app } from '../../firebase/boot';
export default {
    name: "contact",
    data() {
        return {
            submitted: false,
            load: false,
            formData: {
                name: '',
                email: '',
                message: ''
            }
        };
    },
    methods: {
        submitForm() {
            this.load = true
            app.firestore().collection("contact").add({ ...this.formData }).then(() => {
                this.submitted = true
                this.load = false
                this.formData = {
                    name: '',
                    email: '',
                    message: ''
                }
            })
        },
        validateName(event) {
            const enteredChar = String.fromCharCode(event.charCode);
            const regex = /^[a-zA-Z\s]*$/; // Only allows alphabets and spaces
            if (!regex.test(enteredChar) || this.formData.name.length >= 30) {
                event.preventDefault();
            }
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
