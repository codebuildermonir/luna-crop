const dropdownBtn = document.querySelector('.dropdown-btn');
const dropdownItemsContainer = document.querySelector('.dropdown-items-container');
const dropdownItems = dropdownItemsContainer.querySelectorAll('li');
const dropdownItemSelected = document.querySelector('.dropdown-item-selected');
dropdownBtn.addEventListener('click', function () {
      dropdownItemsContainer.classList.toggle('hidden')
})
for (items of dropdownItems) {
      items.addEventListener('click', function () {
            let getText = this.textContent;
            dropdownItemSelected.textContent = getText;
            dropdownItemsContainer.classList.add('hidden');

      })
}

/* Mobile code number dropdown */
const mobileCodeBtn = document.querySelector('.mobile-code-btn');
const mobileCodeContainer = document.querySelector('.mobile-code-container');
const countryCodeItems = mobileCodeContainer.querySelectorAll('li');
const countryCodeShow = document.querySelector('.country-code-show');
mobileCodeBtn.addEventListener('click', function () {
      mobileCodeContainer.classList.toggle('hidden')
})
for (countryCode of countryCodeItems) {
      countryCode.addEventListener('click', function () {
            const getCode = this.querySelector('.code').textContent;
            countryCodeShow.textContent = getCode;
            mobileCodeContainer.classList.add('hidden')

      })
}