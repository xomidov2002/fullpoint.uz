<script setup lang="ts">
import { ref } from 'vue';
const email = ref('');
const phone = ref('');
const name = ref('');
const message = ref('');

const sendMessage = async () => {
  const url = 'https://api.telegram.org/bot6760739912:AAFVrqguAFvYZ1cDFjCCJyK2cFSoTTatgIM/sendMessage';
  const data = {
    chat_id: '-4102543534',
    text: `New client: \nFull name - ${name.value}, \nPhone number - ${phone.value}, \nemail - ${email.value} \nMessage - ${message.value}`
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      throw new Error('Xatolik yuz berdi');
    }
    else if (phone.value = '') {
      alert('Iltimos kataklarni toldiring')
    }
    const responseData = await response.json();
    console.log('Javob:', responseData);
    alert('Xabar muvaffaqiyatli jo\'natildi');
    email.value = '',
    name.value = '',
    phone.value = '',
    message.value = ''
  } catch (error) {
    console.error('Xatolik:', error);
    alert('Xabar jo\'natishda xatolik yuz berdi');
  }
}
</script>
<template>
  <div class="container mx-auto px-5 py-11">
    <p class="text-3xl font-semibold px-5 border-l-2 py-5 border-l-blue-600 mb-5">Get in touch</p>
    <div class="w-full h-auto p-5 shadow-xl flex justify-evenly contact items-center">
      <div>
        <p class="font-[semibold] text-2xl tracking-widest pb-11">Contact us</p>
        <div class="flex gap-5">
          <div class="w-[30px]"><img src="@/assets/icons/email.png" alt=""></div>
          <p class="tracking-widest">example@gmail.com</p>
        </div>
        <div class="flex gap-5">
          <div class="w-[30px]"><img src="@/assets/icons/telephone.png" alt=""></div>
          <p class="tracking-widest">+998 77 777 77 77</p>
        </div>
        <div class="flex gap-5">
          <div class="w-[30px]"><img src="@/assets/icons/location.png" alt=""></div>
          <p class="tracking-widest">Toshkent, Yunusobod</p>
        </div>
      </div>
      <div>
        <div class="form-container">
          <div class="form">
            <div class="form-group">
              <label for="email">Company Email</label>
              <input v-model="email"  name="email" id="email" type="text">
            </div>
            <div class="form-group">
              <label for="text">Full name</label>
              <input v-model="name" required name="name" id="text" type="text">
            </div>
            <div class="form-group">
              <label for="text">Your phone number</label>
              <input required v-model="phone" name="phone" id="text" type="text">
            </div>
            <div class="form-group">
              <label for="textarea">How Can We Help You?</label>
              <textarea v-model="message" required cols="50" rows="10" id="textarea" name="textarea">          </textarea>
            </div>
            <button @click="sendMessage" class="form-submit-btn">Submit</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.contact{
  width: 100%;
  background: linear-gradient(#ffffff, #ffffff) padding-box,
    linear-gradient(145deg, transparent 35%, #ffd700, #ffffff) border-box;
  border: 2px solid transparent;
  box-sizing: border-box;
  background-size: 200% 100%;
  animation: gradient 5s ease infinite;
}
.form-container {
  width: 100%;
  padding: 32px 24px;
  font-size: 14px;
  color: #252525;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}

.form-container button:active {
  scale: 0.95;
}

.form-container .form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-container .form-group {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.form-container .form-group label {
  display: block;
  margin-bottom: 5px;
  color: #717171;
  font-weight: 600;
  font-size: 12px;
}

.form-container .form-group input {
  width: 100%;
  padding: 12px 16px;
  border-radius: 8px;
  color: #252525;
  font-family: inherit;
  background-color: transparent;
  border: 1px solid #414141;
}

.form-container .form-group textarea {
  width: 100%;
  padding: 12px 16px;
  border-radius: 8px;
  resize: none;
  color: #252525;
  height: 96px;
  border: 1px solid #414141;
  background-color: transparent;
  font-family: inherit;
}

.form-container .form-group input::placeholder {
  opacity: 0.5;
}

.form-container .form-group input:focus {
  outline: none;
  border-color: #252525;
}

.form-container .form-group textarea:focus {
  outline: none;
  border-color: #252525;
}

.form-container .form-submit-btn {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  align-self: flex-start;
  font-family: inherit;
  color: #ffffff;
  font-weight: 600;
  width: 40%;
  background: #313131;
  border: 1px solid #414141;
  padding: 12px 16px;
  font-size: inherit;
  gap: 8px;
  margin-top: 8px;
  cursor: pointer;
  border-radius: 6px;
}

.form-container .form-submit-btn:hover {
  background-color: #fff;
  border-color: #fff;
  color: #252525;
}
.form-container .form-submit-btn:hover{
  @apply shadow-xl
}
</style>