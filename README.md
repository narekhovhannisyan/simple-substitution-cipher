# simple-substitution-cipher

In cryptography, a substitution cipher is a method of encrypting by which units of plaintext are replaced with ciphertext, according to a fixed system; the "units" may be single letters (the most common), pairs of letters, triplets of letters, mixtures of the above, and so forth. The receiver deciphers the text by performing the inverse substitution.

Substitution of single letters separately—simple substitution—can be demonstrated by writing out the alphabet in some order to represent the substitution. This is termed a substitution alphabet. The cipher alphabet may be shifted or reversed (creating the Caesar and Atbash ciphers, respectively) or scrambled in a more complex fashion, in which case it is called a mixed alphabet or deranged alphabet. Traditionally, mixed alphabets may be created by first writing out a keyword, removing repeated letters in it, then writing all the remaining letters in the alphabet in the usual order.

 <img src="https://github.com/narekhovhannisyan/simple-substitution-cipher/blob/master/doc/simpleExample.png" height="300" width="400">

Using this system, the keyword "zebras" gives us the following alphabets:
```
Plaintext alphabet:	ABCDEFGHIJKLMNOPQRSTUVWXYZ
Ciphertext alphabet:	ZEBRASCDFGHIJKLMNOPQTUVWXY
A message of

flee at once. we are discovered!
enciphers to

SIAA ZQ LKBA. VA ZOA RFPBLUAOAR!
```