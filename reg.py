import re 
five_digits_zip = '12345'
nine_digits_zip = '023456789'
phone_number = '234-811-222'
five_digits_expression = r'\d{5}'
print(re.search(five_digits_expression, five_digits_zip))
print(re.search(five_digits_expression, nine_digits_zip))
print(re.search(five_digits_expression, phone_number))