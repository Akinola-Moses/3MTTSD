def Ask_me(country, state):
    data1 = input('Enter the name of your country: ')
    data2 = input('Enter your state: ')
    if data2 == Osun and data1 == Nigeria:
        print('Welcome Omuluabi! Kindly enter any amount')
        print(' of money you want: ')
        data3 = input('in Naira')
        print('Sent', data3)
    else:
        print('You are not an Omoluabi! ')
    Ask_me(Nigeria, Osun)
    