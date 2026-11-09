import pathlib
import subprocess
import unittest

import yaml


class IngressTlsTest(unittest.TestCase):
    def test_multiple_paths_share_one_tls_host(self):
        chart = pathlib.Path(__file__).resolve().parent.parent
        values = """\
service:
  ports:
    - port: 443
ingress:
  tls: true
  rules:
    - host: example.com
      path: /first
    - host: example.com
      path: /second
    - host: other.example.com
      path: /third
"""
        rendered = subprocess.run(
            ["helm", "template", "test", str(chart), "-f", "-", "--show-only", "templates/ingress.yaml"],
            input=values, text=True, capture_output=True, check=True,
        )
        ingress = yaml.safe_load(rendered.stdout)
        self.assertEqual(ingress["spec"]["tls"][0]["hosts"], ["example.com", "other.example.com"])
        self.assertEqual(
            [rule["http"]["paths"][0]["path"] for rule in ingress["spec"]["rules"]],
            ["/first", "/second", "/third"],
        )


if __name__ == "__main__":
    unittest.main()
