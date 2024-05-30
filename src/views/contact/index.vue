<script setup lang="ts">
import { ref } from 'vue';
import BaseButton from '@/components/BaseButton/index.vue'
import { useI18n } from 'vue-i18n';
const email = ref('');
const phone = ref('');
const name = ref('');
const message = ref('');
const {t} =useI18n()
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
  <div class="bg-[url('/images/contact.jfif')] bg-center bg-cover bg-no-repeat">
    <div class="container mx-auto px-5 py-11">
      <p class="text-3xl font-semibold px-5 border-l-2 py-5 border-l-white mb-5 text-white">{{ t('mainPage.contact') }}</p>
      <div
        class="backdrop-blur-md bg-white/40 w-full h-auto p-5 shadow-xl flex flex-wrap lg:flex-nowrap justify-center lg:justify-evenly contact items-center">
        <div>
          <p class="font-[semibold] text-white text-2xl tracking-widest pb-11">{{ t('mainPage.contact') }}</p>
          <div class="flex gap-5">
            <div class="w-[30px]"><img src="@/assets/icons/email.png" alt=""></div>
            <p class="tracking-widest text-white">example@gmail.com</p>
          </div>
          <div class="flex gap-5">
            <div class="w-[30px]"><img src="@/assets/icons/telephone.png" alt=""></div>
            <p class="tracking-widest text-white">+998 77 777 77 77</p>
          </div>
          <div class="flex gap-5">
            <div class="w-[30px]"><img src="@/assets/icons/location.png" alt=""></div>
            <p class="tracking-widest text-white">Toshkent, Yunusobod</p>
          </div>
        </div>
        <div>
          <div class="form-container">
            <div class="form">
              <div class="form-group">
                <label for="email">{{ t('mainPage.contactMail') }}</label>
                <input v-model="email" name="email" id="email" type="text">
              </div>
              <div class="form-group">
                <label for="text">{{ t('mainPage.contactName') }}</label>
                <input v-model="name" required name="name" id="text" type="text">
              </div>
              <div class="form-group">
                <label for="text">{{ t('mainPage.contactNumber') }}</label>
                <input required v-model="phone" name="phone" id="text" type="text">
              </div>
              <div class="form-group">
                <label for="textarea">{{ t('mainPage.contactText') }}</label>
                <textarea v-model="message" required cols="50" rows="10" id="textarea"
                  name="textarea">          </textarea>
              </div>
              <BaseButton @click="sendMessage" :name="t('mainPage.Submit')" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
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
  color: white;
  font-weight: 600;
  font-size: 12px;
}

.form-container .form-group input {
  width: 100%;
  padding: 12px 16px;
  border-radius: 8px;
  color: white;
  font-family: inherit;
  background-color: transparent;
  border: 1px solid white;
}

.form-container .form-group textarea {
  width: 100%;
  padding: 12px 16px;
  border-radius: 8px;
  resize: none;
  color: white;
  height: 96px;
  border: 1px solid white;
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
</style>