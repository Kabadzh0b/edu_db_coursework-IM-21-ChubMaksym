# Тестування працездатності системи

## Інформація про тестування
Тестування відбувається за допомогою програми ***Postman***. Його використання дає змогу виконувати запити з різними методами, параметрами тощо.

## Отримання всіх дозволів
![get_all_roles](./images/getAllPermissions.png)

## Отримання одного дозволу
![get_specific_role](./images/getOnePermission.png)

![try_to_get_role](./images/get204error.png)
Тут можна побачити спробу отримати інформацію про дозвіл з id = 100, проте такого дозволу не існує у нашії бд, тому сервер повертає нам код ***204*** "No Content".

## Оновлення інформації про роль
![put_info_for_role_with_error](./images/put500error.png)
Тіло нашого запиту не містить потрібної нам інформації, тому сервер повертає нам код ***500*** та інформує про помилку

![put_info_with_name](./images/putDone.png)
Ми вказали інформацію, яку ми хочемо оновити, тож ми отримали відповідь про те, чи відбулася зміна

![check_is_updated](./images/putCheck.png)
Перевіряємо чи дійсно інформація була змінена, і отримуємо позитивний результат

## Створення ролі
![post_role](./images/postPermission.png)
Відправляємо запит з обов'язковою інформацією, та отримуємо її ID

![post_role_without_name](./images/postWithoutName.png)
***name*** - обов'язкове поле, без якого роль не може існувати. Тобто якщо ми спробуємо зробити роль без назви - ми отримаємо код ***400*** та повідомлення про те, що потрібно вказати назву

![check_is_created](./images/getAllAfterPost.png)
Задля перевірки, робимо знову запит на отримання всіх дозволів, та помічаємо нові ролі

## Видалення ролі
![get_before_delete_role_by_id](./images/deletePermission.png)
Намагаємося видалити роль та отримуємо позитивний результат