/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  adminSidebar: [
    {
      type: 'doc',
      id: 'introduction',
    },
    {
      type: 'doc',
      id: 'usage',
    },
    {
      type: 'category',
      label: 'Configuration',
      items: [
        'configuration/reference',
        'configuration/containers',
        'configuration/init-containers',
        'configuration/labels',
        'configuration/annotations',
        'configuration/volumes',
        'configuration/service',
        'configuration/serviceName',
        'configuration/ingress',
        'configuration/replicas',
        'configuration/auto-scaling',
        'configuration/rolling-update',
        'configuration/pull-secrets',
        'configuration/tolerations',
        'configuration/affinity',
        'configuration/node-selector',
        'configuration/node-name',
        'configuration/pod-management-policy',
      ],
    },
    {
      type: 'category',
      label: 'Guides',
      items: [
        'guides/ingress-domains',
        'guides/ssl-certificates',
        'guides/persistent-volumes',
      ],
    },
    {
      type: 'link',
      label: '↗️ DevSpace CLI',
      href: 'https://devspace.sh/cli/docs/introduction',
    },
  ],
};
