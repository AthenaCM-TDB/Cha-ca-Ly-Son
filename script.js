'use strict';
const $ = (selector) => document.querySelector(selector);
const config = { fanpageUrl: '', phoneNumber: '' }; // Điền liên hệ chính thức vào đây sau khi xác nhận.
const navToggle = $('#menu-toggle');
const mobileNav = $('#mobile-nav');
navToggle.addEventListener('click', () => {
 const opening = mobileNav.hidden;
 mobileNav.hidden = !opening;
 navToggle.setAttribute('aria-expanded',String(opening));
 navToggle.setAttribute('aria-label', opening ? 'Đóng menu' : 'Mở menu');
});
mobileNav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{mobileNav.hidden=true;navToggle.setAttribute('aria-expanded','false')}));
$('#year').textContent = String(new Date().getFullYear());
const quantity = $('#quantity');
function setQuantity(n){ quantity.value = String(Math.min(99,Math.max(1,Math.floor(Number(n)||1)))); }
$('#minus').addEventListener('click',()=>setQuantity(Number(quantity.value)-1));
$('#plus').addEventListener('click',()=>setQuantity(Number(quantity.value)+1));
quantity.addEventListener('change',()=>setQuantity(quantity.value));
document.querySelectorAll('[data-product]').forEach(button => button.addEventListener('click',()=>{
 $('#item').value='Chả cá đỏ Lý Sơn';
 $('#dat-hang').scrollIntoView({behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'});
 $('#order-message').textContent = 'Đã chọn: '+button.dataset.product+'. Bạn có thể điền thông tin bên dưới.';
}));
$('#order-form').addEventListener('submit',event=>{
 event.preventDefault();
 const form=event.currentTarget;
 if(!form.reportValidity())return;
 setQuantity(quantity.value);
 const name=$('#customer').value.trim();const phone=$('#phone').value.trim();const address=$('#address').value.trim();const note=$('#note').value.trim();
 if(!name||!phone||!address){$('#order-message').textContent='Vui lòng nhập đủ tên, số điện thoại và khu vực nhận hàng.';return;}
 const message=`Xin chào Dì Trúc, tôi muốn hỏi đặt chả cá đỏ Lý Sơn.\n\nSản phẩm: ${$('#item').value}\nSố lượng: ${quantity.value} phần/gói (vui lòng xác nhận quy cách)\nTên: ${name}\nSố điện thoại: ${phone}\nĐịa chỉ/khu vực: ${address}${note?'\nGhi chú: '+note:''}\n\nNhờ cửa hàng xác nhận giá, phí giao hàng và thời gian nhận. Cảm ơn!`;
 $('#order-text').value=message;
 $('#order-result').hidden=false;
 $('#order-message').textContent='Đã soạn nội dung. Hãy sao chép rồi gửi qua Fanpage hoặc kênh liên hệ chính thức của cửa hàng.';
 $('#copy-status').textContent='';
 $('#order-result').scrollIntoView({behavior:'smooth',block:'nearest'});
});
$('#copy-order').addEventListener('click',async()=>{
 const text=$('#order-text').value;
 try{await navigator.clipboard.writeText(text);$('#copy-status').textContent='Đã sao chép. Bạn có thể dán vào tin nhắn để gửi.';}
 catch{const field=$('#order-text');field.focus();field.select();$('#copy-status').textContent='Hãy nhấn Ctrl+C (hoặc Sao chép trên điện thoại) để lấy nội dung.';}
});
