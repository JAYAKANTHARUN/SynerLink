import requests

cv_url = 'https://drive.google.com/file/d/1CVR0QepndvIFYtIcUHzC2xQtAHgqiBVb/view?usp=sharing'
url = "https://api.apilayer.com/resume_parser/url?url={cv_url}"

payload = {}
headers= {
  "apikey": "s07RFGMpgP3vTMDE4emEdfcuuhFlS7Je"
}

response = requests.request("GET", url, headers=headers, data = payload)

status_code = response.status_code
result = response.text
print(result)